const express = require("express");
const bodyparser = require("body-parser");
const connectDB = require("./db");
const urlRoutes = require("./routes/urlRoutes");

//routes

const app = express();
const PORT = 3000;

//connect  to database
connectDB();

//middleware
app.use(bodyparser.json());

app.use("/", urlRoutes);
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`server is running fine on ${PORT}`);
});
