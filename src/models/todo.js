var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    id: Number,
    title: String,
    completed: Boolean,
});

module.exports = mongoose.model("todo", todoSchema);