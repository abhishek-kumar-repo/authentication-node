const express = require("express");
const app = express();
const routes = require("./routes");
require("dotenv").config();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use("/", routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {
  console.log("Server started in port number " + PORT);
});
