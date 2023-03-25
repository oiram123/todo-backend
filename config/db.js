const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://mario:mariomargjini.12@cluster0.s9wsk5k.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => console.log("Database", err));
};

module.exports = connectDB;
