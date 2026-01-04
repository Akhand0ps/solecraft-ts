import express from "express";
import { authorize } from "../middleware/auth.middleware.js";
import { onlyAdmin } from "../middleware/auth.role.js";
import { createProduct } from "../controllers/product.controller.js";



const router = express.Router();


router.post("/create",authorize,onlyAdmin,createProduct);


export default router;