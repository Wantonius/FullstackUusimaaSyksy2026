window.onload = function() {
	if(localStorage.getItem("message")) {
		 const message = localStorage.getItem("message");
		 const localMessage = document.getElementById("local");
		 localMessage.textContent = "In Local Storage:"+message;
	}
	if(sessionStorage.getItem("message")) {
		const message = sessionStorage.getItem("message");
		const sessionMessage = document.getElementById("session");
		sessionMessage.textContent = "In Session Storage:"+message;
	}
}

function saveToLocalStorage() {
	localStorage.setItem("message",document.getElementById("message").value)
}

function saveToSessionStorage() {
	sessionStorage.setItem("message",document.getElementById("message").value)
}