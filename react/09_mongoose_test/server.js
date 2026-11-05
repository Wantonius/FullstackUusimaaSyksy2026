const express = require("express");
const mongoose = require("mongoose");

const app = express();

/* REMOTE ACCESS TO MONGO ATLAS
const mongo_user = process.env.MONGODB_USER;
const mongo_password = process.env.MONGODB_PASSWORD;
const mongo_url = process.env.MONGODB_URL
const url = "mongodb+srv://"+mongo_user+":"+mongo_password+"@"+mongo_url
*/
//LOCAL VERSION
const url = "mongodb://localhost"


//BOTH VERSIONS
mongoose.connect(url).then(
	() => console.log("Connected to MongoDb"),
	(err) => console.log("Failed to connect to MongoDB. Reason",err)
)

app.listen(3000);

console.log("Running in port 3000");