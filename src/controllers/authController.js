const express = require('express')

const User = require('../models/user')

const router = express.Router()

router.post('/register', async (req, res) => {

    const email = req.body

    try {
        if(User.findOne({ email })) {
            return res.status(400).send({error: 'Email já cadastrado em nosso sistema'})
        }
        
        const user = await User.create(req.body)
        return res.json(user)
    }
    catch(err) {
        res.status(400).send(err)
    }
})

module.exports = app => app.use('/auth', router)