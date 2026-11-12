const container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
	const newDiv = document.createElement("div");
	newDiv.classList.add("cell");
	newDiv.addEventListener("mouseenter", () => {
  	newDiv.style.backgroundColor = "purple";
	});
	container.appendChild(newDiv);
}