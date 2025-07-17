import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("index.ejs")
})

app.get("/stopWatch", (req,res)=>{
    res.render("stopWatch.ejs")
})

app.get("/timer", (req,res)=>{
    res.render("timer.ejs");
})

app.listen(port, (req,res)=>{
    console.log(`listening on port ${port}`);
})