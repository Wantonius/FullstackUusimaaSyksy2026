const express = require("express");

const app = express();

app.use("/",express.static("frontend"));

app.use(express.json());

//DATABASE

let database = [];
let id = 100;

//REST API (CRUD)
//GET 		/api/shopping		get all items
//POST		/api/shopping		post new item
//DELETE    /api/shopping/:id	remove item :id
//PUT		/api/shopping/:id	update item :id

//ITEM
//id	Number
//type	String
//count	Number
//price	Number

//SHOPPING API

app.get("/api/shopping",function(req,res) {
	return res.status(200).json(database);
});

app.post("/api/shopping",function(req,res) {
	let item = {
		id:id,
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	}
	id++;
	database.push(item);
	return res.status(201).json(item);
});

app.delete("/api/shopping/:id",function(req,res) {
	const tempId = parseInt(req.params.id);
	database = database.filter(item => item.id !== tempId);
	return res.status(200).json({"message":"Success"});
});

app.put("/api/shopping/:id",function(req,res) {
	const tempId = parseInt(req.params.id);
	let item = {
		id:tempId,
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	}
	for(let i=0;i<database.length;i++) {
		if(database[i].id === tempId) {
			database.splice(i,1,item);
			return res.status(200).json({"message":"Success"})
		}
	}
	return res.status(404).json({"message":"Not found"});
})

app.listen(3000);
console.log("Running in port 3000");