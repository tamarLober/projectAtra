const Users = require('../models/Users')

const newUser = async (req, res) => {
    try {
        let user = await new Users(req.body)
        await user.save()
        res.status(200).json(user)
    }
    catch (err) {
        res.status(400).send(err)
    }
}

module.exports = { newUser }