const express = require("express");
const mongoose = require("mongoose");
const shoppingRoute = require("./routes/shoppingroute");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost/fullstackshopping").then(
	() => console.log("Connected to Mongodb"),
	(err) => console.log("Failed to connect to Mongodb. Reason",err)
)

app.use("/api",shoppingRoute);

app.listen(3000);

console.log("Running in port 3000");