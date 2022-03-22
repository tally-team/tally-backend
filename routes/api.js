const express = require('express');
const router = express.Router();
const User = require('../db/schema/user');

//currently hosing user route, will split off individual schema routes in the future
router.get('/users', (req, res) =>{
    User.find({}).then(function(users){
        res.send(users)
    })
})

router.post('/users', (req, res) =>{
    User.create(req.body).then(function(user){
        res.send(user);
    })
})

module.exports = router;