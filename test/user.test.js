const { connectDatabase, disconnectDatabase } = require("../utils/test-utils/db.util");

const supertest = require('supertest')
const app = require('../app');
const request = supertest(app);

const User = require('../db/schema/user');
const userTestData = require('./user.test.data');
const res = require("express/lib/response");

describe('user routes', () =>{
    beforeAll(() => {
        connectDatabase();
    });

    beforeEach(async ()=>{
        for await (const userData of userTestData){
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
                    password: 'testPassD',
                    preferredPaymentMethod: 'CASH'
                })

            expect(res.status).toBe(200)

            const res2 = await request.get('/api/users');
            expect(res2.body[3].uuid).toBe('4')
            expect(res2.body[3].userName).toBe('testD')
            expect(res2.body[3].password).toBe('testPassD')
            expect(res2.body[3].preferredPaymentMethod).toBe('CASH')
        })
        it('should automatically add the default attribute for \'preferredPaymentMethod\' if omitted', async ()=>{
            const res = await request
                .post('/api/users')
                .send({
                    uuid: '5',
                    userName: 'testE',
                    password: 'testPassE'
                })
            
            expect(res.body.preferredPaymentMethod).toBe('CASH')

            const res2 = await request.get('/api/users');
            expect(res2.body[3].preferredPaymentMethod).toBe('CASH')
        })

         //ATM UUID is passed in with making a post request, but should change this so a UUID is generated for the user
         it('should throw an error if uuid, username, password is omitted', async () =>{
             try{  
                 const res = await request
                 .post('/api/users')
                 .send({
                     uuid: '6',
                     password: 'testPassF'
                 })
             }
             catch(err){
                 request.close()
                 expect(err.message).toBe('userName required')
             }
         })

        it('should not take in any extra information past User Schema', async () =>{
            const res = await request
                .post('/api/users')
                .send({
                    uuid: '5',
                    userName: 'testE',
                    password: 'testPassE',
                    extra: 'extra_content'
                })
            
            expect(res.body.uuid).toBe('5')
            expect(res.body.userName).toBe('testE')
            expect(res.body.password).toBe('testPassE')
            expect(res.body.extra).toBe(undefined)
            

            const res2 = await request.get('/api/users');
            expect(res2.body[3].extra).toBe(undefined)
        })
    })
})
