/**
Function for establishing collection with the database with the querystring present in .env file's CONNECTION variable.
 */

const mongoose = require("mongoose");

const connectDb = () => {
      mongoose.set("strictQuery", false);
      mongoose.connect(process.env.CONNECTION, {
            useNewUrlParser: true,
      });
      const con = mongoose.connection;
      con.on("error", console.error.bind(console, "Database connection failed!"));
      con.on("open", function () {
            console.log("Database connection established...");
      });
};

module.exports = connectDb;
