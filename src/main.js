const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

const healthCheckRoutes = require("./routes/health_check.route");
const userRoutes = require("./routes/user.route");
const MongoDBConnection = require("./db/mongodb");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

const mongodb = new MongoDBConnection();
mongodb._connect();

app.use("/", healthCheckRoutes, userRoutes);
//define server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
