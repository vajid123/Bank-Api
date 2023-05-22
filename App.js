const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")


const app=express()
const port=2020
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/").then(() => {
    console.log('DB is connected successfully!!!')
});
app.get("/",(req,res)=>{
    res.send("Welcome......")
})
app.listen(port,()=>{
    console.log(`Server is up port ${port}`)
})