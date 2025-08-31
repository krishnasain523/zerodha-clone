require("dotenv").config();
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Holding = require("./models/hodlingmodel");
const {holdingsdata, positionsdata}  = require("./init/data");
const positions = require("./models/positionmodel");
const orders=require("./models/ordermodel");
const url=process.env.MONGO_URL;
const PORT=process.env.PORT||3002;
const cors=require("cors");
app.use(express.json()); // parse JSON
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "*",  // or put your frontend URL instead of "*"
  methods: ["GET", "POST"],
}));
app.get("/addsampledata",async(req,res)=>
{
   await Holding.deleteMany({});
   await Holding.insertMany(holdingsdata);
   await position.deleteMany({});
   await position.insertMany(positionsdata);
  
   console.log("data inserted");
    res.send("Sample data inserted"); 
})
app.get("/allholdings",async(req,res)=>{
    let holdings=await Holding.find({});
    res.send(holdings);
})
app.get("/allpositions",async(req,res)=>{
    let position=await positions.find({});
    res.send(position);
})
app.get("/allorders",async(req,res)=>{
    let order=await orders.find({});
    res.send(order);
})
app.post("/neworder",async(req,res)=>{
    const {name,qty,price,mode}=req.body;
    const orderdata={
      name:name,
      qty:qty,
      price:price,
      mode:mode,
    };
    // await orders.deleteMany({});
    await orders.insertOne(orderdata);
    console.log("order placed sucess");
})
mongoose.connect(url)
  .then(() => {
    console.log("db connected");

    app.listen(PORT, () => {
      console.log(`app started on port ${PORT}`);
    });
  })
  .catch((err) => console.error("DB connection error:", err));
