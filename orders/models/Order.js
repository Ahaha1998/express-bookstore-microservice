const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  custId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  },
  bookId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  },
  initDate: {
    type: Date,
    required: true
  },
  deliverDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Order", orderSchema);
