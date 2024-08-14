class HealthCheckModel {
  constructor(appName, version, status) {
    this.appName = appName;
    this.version = version;
    this.status = status;
  }
}

module.exports = HealthCheckModel;
