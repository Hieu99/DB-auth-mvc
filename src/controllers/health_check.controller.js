const HealthCheckModel = require("../models/health_check.model");

class HealthCheckController {
  static async healthCheck(req, res) {
    const app = new HealthCheckModel("Auth Service", "1.0.0", "Available");

    res.status(200).json(app);
  }
}
module.exports = HealthCheckController;
