import { Request,Response,Router } from "express";

const router = Router();
router.get('/',(req:Request,res:Response)=>{

res.send({Data: 'los modelos'})

});

export {router};