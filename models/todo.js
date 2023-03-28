const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  createdAt: {
      type: Date,
      default: Date.now,
  },
  title: {
      type: String
  },
  content:{
      type: String,
  },
  status: {
    default: "Todo",
    type: String,
  },
    user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
})


const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
