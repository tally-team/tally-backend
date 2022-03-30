const { connectDatabase, disconnectDatabase } = require("../utils/test-utils/db.util");

const supertest = require('supertest')
const app = require('../app');
const request = supertest(app);

const User = require('../db/schema/user');
const userTestData = require('./user.test.data');

describe('user routes', () =>{
    beforeAll(() => {
        connectDatabase();
    });

    beforeEach(async ()=>{
        for(const userData of userTestData){
            const newUser = new User({
                uuid: userData.uuid,
                userName: userData.userName,
                password: userData.password
            })
            await newUser.save()
        }
    })
    
    afterEach(async ()=>{
        await User.deleteMany()
    })

    afterAll(() => {
        disconnectDatabase();
    });
    describe('GET route', () =>{
        it('should get all users from database', async () =>{
            const res = await request.get('/api/users');
            //console.log(res)
            expect(res.status).toBe(200)
            expect(res.body.length).toBe(userTestData.length)
            expect(res.body[0].uuid).toBe(userTestData[0].uuid)
            expect(res.body[0].userName).toBe(userTestData[0].userName)
            expect(res.body[0].password).toBe(userTestData[0].password)
            expect(res.body[0].preferredPaymentMethod).toBe(userTestData[0].preferredPaymentMethod)
        })

    })
    describe('POST route', () =>{
        it('should add a new user to the database', async () =>{
            const res = await request
                .post('/api/users')
                .send({
                    uuid: '4',
                    userName: 'testD',
                    password: 'testPassD'
                })

            expect(res.status).toBe(200)
            expect(res.body.uuid).toBe('4')
            expect(res.body.userName).toBe('testD')
            expect(res.body.password).toBe('testPassD')
            expect(res.body.preferredPaymentMethod).toBe('CASH')
        })
    })
})