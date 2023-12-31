const dbConfig = require("./dbConfig");
const expressConfig = require("./expressConfig");

let cfg = {
  projectName: process.env.PROJECT_NAME,
  environment: process.env.NODE_ENV,
  debug: process.env.DEBUG,
  TAG: process.env.NODE_ENV,
  port: process.env.PORT,
  protocol: "http",
  mongo: {
    dbName: process.env.DB_NAME,
    dbUrl: process.env.DB_URL,
    options: {
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true
    },
  },
};

module.exports = {
  cfg,
  dbConfig,
  expressConfig,
};
