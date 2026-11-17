const container = document.getElementById("grid-container");
const sizeBtn = document.getElementById("size-btn");
const eraseBtn = document.getElementById("erase-btn");


for (let i = 0; i < 256; i++) {
	const newDiv = document.createElement("div");
	newDiv.classList.add("cell");
	newDiv.addEventListener("mouseenter", () => {
  	newDiv.style.backgroundColor = "purple";
	});
	container.appendChild(newDiv);
}

eraseBtn.addEventListener("click", () => {
	const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});