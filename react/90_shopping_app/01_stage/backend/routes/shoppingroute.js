const express = require("express");
const itemModel = require("../models/item");

//SHOPPING API
//GET 		/shopping 		fetch all items
//POST		/shopping		add new item
//DELETE	/shopping/:id	delete item with :id
//PUT		/shopping/:id	update item with :id

const router = express.Router();

router.get("/shopping",function(req,res) {
	itemModel.find().then(function(items) {
		return res.status(200).json(items);
	}).catch(function(err) {
		console.log("Failed in finding items. Reason",err);
		return res.status(500).json({"message":"Internal Server Error"})
	})
})

router.post("/shopping",function(req,res) {
	if(!req.body) {
		return res.status(400).json({"message":"Bad Request"});
	}
	if(!req.body.type) {
		return res.status(400).json({"message":"Bad Request"});
	}
	let item = new itemModel({
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	})
	item.save().then(function(item) {
		return res.status(201).json(item);
	}).catch(function(err) {
		console.log("Failed to add new item. Reason",err);
		return res.status(500).json({"message":"Internal Server Error"})
	});
})

router.delete("/shopping/:id",function(req,res) {
	itemModel.deleteOne({"_id":req.params.id}).then(function() {
		return res.status(200).json({"message":"Success"});
	}).catch(function(err) {
		console.log("Failed to delete item. Reason",err);
		return res.status(500).json({"message":"Internal Server Error"})
	})
})

router.put("/shopping/:id",function(req,res) {
	if(!req.body) {
		return res.status(400).json({"message":"Bad Request"});
	}
	if(!req.body.type) {
		return res.status(400).json({"message":"Bad Request"});
	}
	let item = {
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	}
	itemModel.replaceOne({"_id":req.params.id},item).then(function() {
		return res.status(200).json({"message":"Success"})
	}).catch(function(err) {
		console.log("Failed to edit item. Reason",err);
		return res.status(500).json({"message":"Internal Server Error"})
	})
})

module.exports = router;