var mode = 0;

window.onload = function() {
	createForm();
}

const createForm = () => {
	const root = document.getElementById("root");
	const boundingDiv = document.createElement("div");
	boundingDiv.style.width = "40%";
	boundingDiv.style.margin = "auto";
	boundingDiv.style.backgroundColor = "pink";
	boundingDiv.style.textAlign = "center";
	const form = document.createElement("form");
	form.setAttribute("class","m-3");
	
	//Type label and input
	const typeLabel = document.createElement("label");
	typeLabel.setAttribute("for","type");
	typeLabel.setAttribute("class","form-label");
	const typeLabelText = document.createTextNode("Type");
	typeLabel.appendChild(typeLabelText);
	const typeInput = document.createElement("input");
	typeInput.setAttribute("type","text");
	typeInput.setAttribute("id","type");
	typeInput.setAttribute("name","type");
	typeInput.setAttribute("class","form-control");

	//Count label and input
	const countLabel = document.createElement("label");
	countLabel.setAttribute("for","count");
	countLabel.setAttribute("class","form-label");
	const countLabelText = document.createTextNode("Count");
	countLabel.appendChild(countLabelText);
	const countInput = document.createElement("input");
	countInput.setAttribute("type","number");
	countInput.setAttribute("id","count");
	countInput.setAttribute("name","count");
	countInput.setAttribute("class","form-control");

	//Price label and input
	const priceLabel = document.createElement("label");
	priceLabel.setAttribute("for","price");
	priceLabel.setAttribute("class","form-label");
	const priceLabelText = document.createTextNode("Price");
	priceLabel.appendChild(priceLabelText);
	const priceInput = document.createElement("input");
	priceInput.setAttribute("type","number");
	priceInput.setAttribute("id","price");
	priceInput.setAttribute("name","price");
	priceInput.setAttribute("class","form-control");
	priceInput.setAttribute("step","0.01");
	
	//Submit Button
	const submitButton = document.createElement("input");
	submitButton.setAttribute("type","submit");
	submitButton.setAttribute("value","Add");
	submitButton.setAttribute("id","submitbutton");
	submitButton.setAttribute("class","btn btn-secondary");

	form.append(typeLabel,typeInput,countLabel,countInput,priceLabel,priceInput,submitButton);
	form.addEventListener("submit",function(e) {
		e.preventDefault();
		addItem();
	})
	
	boundingDiv.appendChild(form);
	root.appendChild(boundingDiv);
}

const addItem = async () => {
	const typeInput = document.getElementById("type");
	const countInput = document.getElementById("count");
	const priceInput = document.getElementById("price");
	
	let item = {
		"type":typeInput.value,
		"count":countInput.value,
		"price":priceInput.value
	}
	let url = "/api/shopping";
	let request = {
		"method":"POST",
		"headers": {
			"Content-Type":"application/json"
		},
		"body":JSON.stringify(item)
	}
	if(mode) {
		url = "/api/shopping/"+mode;
		request.method = "PUT";
	}
	const response = await fetch(url,request);
	if(response.ok) {
		typeInput.value = "";
		countInput.value = "";
		priceInput.value = "";
		mode = 0;
		const submitButton = document.getElementById("submitbutton");
		submitButton.value = "Add";
		//getList();
	} else {
		console.log("Server responded with a status",response.status);
	}
}