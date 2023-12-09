import express from 'express'
const router = express.Router()

import {fetch,create,update,trash} from '../controller/purchase.controller.js';

router.get('/purchase',fetch)
router.post('/purchase',create)
router.put('/purchase/:id',update)
router.delete('/purchase/:id',trash)

export default router