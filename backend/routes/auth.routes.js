import express from "express";
const router = express.Router()

import {login,signup,forgotPassword} from '../controller/auth.controller.js'

router.post('/login',login)
router.post('/signup',signup)
router.post('/forgot-password',forgotPassword)

export default router