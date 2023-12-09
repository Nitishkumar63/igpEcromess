import express from 'express'
const router = express.Router();
import {fetch,create,update,trash} from '../controller/category.controller.js';

router.get("/category",fetch)

router.post("/category",create)

router.put("/category/:id",update)

router.delete("/category/:id",trash)

export default router