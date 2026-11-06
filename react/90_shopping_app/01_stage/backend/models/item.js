const mongoose = require("mongoose");

const Schema = mongoose.Schema({
	type:String,
	count:Number,
	price:Number
})

module.exports = mongoose.model("Item",Schema);