const express = require("express"); 
const connectDb = require("./db");
var signinRouter = require("./routes/signin.js");
const cors = require("cors");




var app = express();
const port = 3060; 
app.use(express.json());
app.use(cors({origin:"*"}));
connectDb();


//Http methods
app.get("/", (req, res) => { 
    res.send("hello now its working"); 
}); 
app.use("/signin", signinRouter);
 

const PORT = process.env.PORT || 3060;
app.listen(port, () => {
    console.log('now its working thank god ' + port); 
});