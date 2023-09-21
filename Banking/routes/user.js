import express from "express";
import { register , allusers , singleuser } from "../controllers/user.js";

const router=express.Router();

router.post("/new" ,register);

router.get("/all" , allusers);

router.get("/all/user/:userName" , singleuser);

 

export default router;