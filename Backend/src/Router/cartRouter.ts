import { Router } from "express";   
import {addProductsToCart} from '../Controller/cartController'
import { verifyToken } from "../Middlewares/verifyToken";

const cartRoute = Router()

cartRoute.post("",verifyToken,addProductsToCart)

export default cartRoute