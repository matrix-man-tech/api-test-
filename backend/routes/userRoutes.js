const express = require('express')
const { userRegisterCtrl,loginUserCtrl, fetchUserDetailsCtrl, getRandomJoke, logout } = require('../controllers/userControllers')
const {authMiddleware} = require('../middlewares/authMiddleware')

const userRoutes = express.Router()

userRoutes.post('/signup',userRegisterCtrl)
userRoutes.post('/login',loginUserCtrl)
userRoutes.get('/me',authMiddleware,fetchUserDetailsCtrl)
userRoutes.get('/random-joke',authMiddleware,getRandomJoke)
userRoutes.post('/logout',authMiddleware,logout)


module.exports = userRoutes