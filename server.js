import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Cards from "./dbCards.js";

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://mayurbadole01:9307543901@cluster0.kvpokhd.mongodb.net/tinderdb?retryWrites=true&w=majority`;

//  Middleeware
app.use(express.json());
app.use(Cors());
// Db Config

mongoose.connect(connection_url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// api endpoint

app.get("/", (req, res) => res.status(200).send("hello"));

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard)
  .then((data)=>{
    res.status(201).send(data);
  })

  .catch((err)=>{
    res.status(500).send(err)
  })
//   Cards.create(dbCard, (err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(201).send(data);
//     }
//   });
});

app.get("/tinder/cards", (req, res) => {
    
  Cards.find().then((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
// listener

app.listen(port, () => console.log(`listen local host:  ${port}`));
