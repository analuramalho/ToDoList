import 'reflect-metadata'
import './database'
import express,{Request,Response} from 'express'

const app = express();

app.get('/',(req:Request,res:Response)=>{
    return res.json({message:"server running"})
})

app.listen(3000,()=>console.log("server running in port 3000"))
