const router = require('express').Router()
const User = require('../controllers/userController')

router.post('/newUser', User.newUser)


module.exports = router; 
