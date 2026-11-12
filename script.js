const container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
	const newDiv = document.createElement("div");
	newDiv.classList.add("cell");
	container.appendChild(newDiv);
	
}