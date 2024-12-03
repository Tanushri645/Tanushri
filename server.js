const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5002;

app.use(express.json());
app.use(cors());

mongoose
.connect(
  "mongodb+srv://tanushridascse:Tanu005@tanu005.0uclm.mongodb.net/?retryWrites=true&w=majority&appName=Tanu005" ,  
   {}
  )

.then(()=>{
    console.log("Connected to Database");
});

//routes
const userRoute = require("./route/user.route");
const todoRoute=require("./route/todo.route");
app.use("/user", userRoute);
app.use("/todo",todoRoute);

app.get("/", (req, res) => {
    res.send("Hello World");
    res.end();
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
