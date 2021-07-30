const config = {
  app: {
    port: process.env.PORT || 8082,
  },
  db: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || "sitcor_dev",
  },
};

module.exports = config;
