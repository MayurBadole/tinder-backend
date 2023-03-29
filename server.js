import express  from "express";
import mongoose from "mongoose";
const connection_url=`mongodb+srv://mayurbadole01:9307543901@cluster0.kvpokhd.mongodb.net/?retryWrites=true&w=majority`

// App config
const app = express();
const port = process.env.PORT || 8001

//  Middleeware


// api endpoint

app.get('/',(req,res)=>res.status(200).send("hello"))


// listener

app.listen(port, ()=> console.log(`listen local host:  ${port}`));