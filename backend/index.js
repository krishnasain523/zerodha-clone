require("dotenv").config();
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Holding = require("./models/hodlingmodel");
const {holdingsdata, positionsdata}  = require("./init/data");
const positions = require("./models/positionmodel");
const orders=require("./models/ordermodel");
const users=require("./models/usermodel");
const url=process.env.MONGO_URL;
const PORT=process.env.PORT||3002;
const session=require("express-session");
const cors=require("cors");
app.use(express.json()); // parse JSON
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ["http://localhost:5173","https://zerodha-clone-jet.vercel.app"],  // or put your frontend URL instead of "*"
  methods: ["GET", "POST"],
    credentials: true,
}));

app.use(session({
 secret:"secretcode",
  resave:false,
  saveUninitialized:true,
    cookie: {
      secure: false, // set true if HTTPS
      httpOnly: true,
      sameSite: "lax"
    }
}),

);
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
app.post("/neworder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const orderdata = { name, qty, price, mode };

    const newOrder = await orders.create(orderdata);

    console.log("order placed success");
    res.status(201).json(newOrder); // send response back
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});
app.post("/register",async(req,res)=>{
  try{
    const{username,email,password}=req.body;
    const userinfo={username,email,password};
     const isemail= await users.findOne({email});
     if(isemail)
     {
      return res.status(500).json({ success:false ,massege:"email is already exits" });
     }
    const newuser=await users.create(userinfo);
       req.session.user = {
      id: newuser._id,
      username: newuser.username,
      email: newuser.email
    };
    console.log("userlogedin");
   res.json({success:true,redirecturl:"https://zerodha-clone-jet.vercel.app/"});
  } catch(err)
  {
    console.log(err);
  }
})
app.get("/login",async(req,res)=>{
  const{email,password}=req.body;
    const user=await users.findOne({email});
    if(!user)
    {
      res.status(404).json({error:"something went wrong"});
    }
    if(user.email==email&& user.password==password)
    {
      
    }

})
mongoose.connect(url)
  .then(() => {
    console.log("db connected");

    app.listen(PORT, () => {
      console.log(`app started on port ${PORT}`);
    });
  })
  .catch((err) => console.error("DB connection error:", err));
