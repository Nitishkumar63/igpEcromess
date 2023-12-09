import express from 'express'
const router = express.Router()
import {fetch,create,update,trash} from '../controller/address.controller.js'

router.get('/address',fetch)
router.post('/address',create)
router.put('/address/:id',update)
router.delete('/address/:id',trash)

export default router