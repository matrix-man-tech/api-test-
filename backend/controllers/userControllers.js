const expressAsyncHandler = require('express-async-handler')
const User = require('../models/User')
const validateMongodbId = require('../utils/validateMongodbId')
const axios = require('axios')
const { response } = require('express')

const userRegisterCtrl = expressAsyncHandler(async(req,res) =>{
    const { firstName,lastName,email,password} = req.body
    console.log(req.body)
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }
    try {
        const user = await User.create({
            firstName: req?.body?.firstName,
            lastName: req?.body?.lastName,
            email: req?.body?.email,
            password: req?.body?.password,
        })
        res.json(user)
    } catch (error) {
        res.json(error)
    }
})

const loginUserCtrl = expressAsyncHandler(async (req,res) =>{
    const { firstName,lastName,email,password} = req.body
    const userFound = await User.findOne({email})
    if(userFound && (await userFound.isPasswordMatched(password))){
        const token = await userFound.newAuthToken()
        res.send({ userFound, token})
    }
    else{
        res.status(401)
        throw new Error("Invalid credentials")
    }
})

const fetchUserDetailsCtrl = expressAsyncHandler(async (req,res)=>{
    const { id } = req.user
    validateMongodbId(id)
    try {
        const user = await User.findById(id)
        res.json(user)
    } catch (error) {
        res.json(error)
    }
  })

const getRandomJoke = expressAsyncHandler(async (req,res) =>{
    try {
        const response = await axios.get("https://api.chucknorris.io/jokes/random");
        res.json(response.data.value)
    } catch (error) {
        res.json(error)
    }

})

const logout = expressAsyncHandler(async(req,res)=>{
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = { loginUserCtrl,userRegisterCtrl,fetchUserDetailsCtrl,getRandomJoke,logout}
