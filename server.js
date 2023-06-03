const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use("/", routes);


app.listen(PORT, (req, res) => {
  console.log("Server started in port number " + PORT);
});
