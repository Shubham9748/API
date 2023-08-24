const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app=express();

const connectDB =require('./db/connect');

const product_routes =require('./routes/product');
app.get("/", (req, res)=>{
    res.send("Hey, i am connected")
});

app.use("/api/products" , product_routes);
const start = async() => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () =>{
        console.log(`${PORT} Yes, i am connected`)
        });
    }catch(error){
        console.log(error);
    }
}

start();