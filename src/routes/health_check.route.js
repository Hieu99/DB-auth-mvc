const express = require("express");
const HealthCheckController = require("../controllers/health_check.controller");

const route = express.Router();

route.get("/", HealthCheckController.healthCheck);

module.exports = route;
