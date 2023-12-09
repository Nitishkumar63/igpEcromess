import express from 'express'
const router = express.Router()

import {fetch,create,update,trash} from '../controller/notification.controller.js'


router.get('/notification',fetch)
router.post('/notification',create)
router.put('/notification/:id',update)
router.delete('/notification/:id',trash)


export default router