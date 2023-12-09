import express from 'express'
const router = express.Router();
import {fetch,create,update,trash} from '../controller/product.controller.js';

router.get("/product",fetch)

router.post("/product",create)

router.put("/product/:id",update)

router.delete("/product/:id",trash)

export default router