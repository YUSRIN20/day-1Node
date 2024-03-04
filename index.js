import  express  from "express";
import fs from 'fs'
import { format } from  'date-fns';
const app  = express()
const PORT =  4000;

app.get('/',(req,res)=>{
   res.status(200) .send(`<div style ="background-color:red; color:white"> <h1>Node Demo </h1></div>`)
})
app.get('/get-data',(req,res)=>{
    res.status(200) .json({message:"status code sucess",data:{name:"yusrin"}})
 })
 
 app.get('/write-read',(req,res)=>{
   let today = format(new Date(),'dd-mm-yyyy-HH-mm-ss')
   console.log(('today',today))
   const filepath = `TimeStamp/${today}.txt`
   fs.writeFileSync(filepath,`${today}`,'utf8')
   let data = fs.readFileSync(filepath,'utf8')
   res.status(200).send(data)
 })
app.listen(PORT,()=>{
     console.log(`app is runningin thr port ${PORT}`);
}) //running