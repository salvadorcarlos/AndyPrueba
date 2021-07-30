const mongoose = require("mongoose");
const config = require("./config");

const {
  db: { host, port, name },
} = config;

const connectionString = `mongodb://${host}:${port}/${name}`;

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
    });

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
