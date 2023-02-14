import { Router } from "express";   
import { addProducts, getProducts } from "../Controller/products";
const productRoute = Router()

productRoute.post("",addProducts)
productRoute.get("/getproducts",getProducts)

export default productRoute