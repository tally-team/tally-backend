import { Request, Response } from "express";

const express = require('express');
const router = express.Router();
const User = require('../db/schema/user');

type FIX_ME = any;

//currently hosing user route, will split off individual schema routes in the future
router.get('/users', (req: Request, res: Response) =>{
    User.find({}).then(function(users: FIX_ME){
        res.send(users)
    })
})

router.post('/users', (req: Request, res: Response) =>{
    const newUser = {
        uuid: req.body.uuid,
        userName: req.body.userName,
        password: req.body.password,
        preferredPaymentMethod: req.body.preferredPaymentMethod
    }
    User.create(newUser).then(function(user: FIX_ME){
        res.send(user);
    })
})

module.exports = router;