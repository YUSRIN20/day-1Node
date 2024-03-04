import  express  from "express";

const app  = express()
const PORT =  4000;

app.get('/',(req,res)=>{
   res.status(200) .json({message:"status code sucess"})
})
app.get('/get-data',(req,res)=>{
    res.status(200) .json({message:"status code sucess",data:{name:"yusrin"}})
 })
 
app.listen(PORT,()=>{
     console.log(`app is runningin thr port ${PORT}`);
}) //running