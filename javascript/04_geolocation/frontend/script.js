function findMe() {

	const status = document.getElementById("status");
	const maplink = document.getElementById("maplink");
	
	function success(position) {
		const longitude = position.coords.longitude;
		const latitude = position.coords.latitude;
		
		status.textContent = "";
		
		maplink.href = "http://www.openstreetmap.org/#map=18/"+latitude+"/"+longitude;
		maplink.textContent = "Your Location";
	}
	
	function error() {
		status.textContent = "Cannot retrieve your location"
	}
	
	if(!navigator.geolocation) {
		status.textContent = "No geolocation";
	} else {
		status.textContent = "Locating...";
	}
	
	navigator.geolocation.getCurrentPosition(success,error);
}