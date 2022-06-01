(() => {
	const element = document.getElementById('auto-header');
	const file = './header.html';
	if(file) {
		xmlRequest = new XMLHttpRequest();
		xmlRequest.onreadystatechange = function () {
			if (this.readyState == 4) {
				if (this.status == 200) {
					element.innerHTML = this.responseText;
				}

				if (this.status == 404) {
					element.innerHTML = "Page not found.";
				}
			}
		}
		xmlRequest.open("GET", file, true);
		xmlRequest.send();
	}
})();
