const container = document.getElementById("grid-container");
const sizeBtn = document.getElementById("size-btn");
const eraseBtn = document.getElementById("erase-btn");

function createGrid(size) {
	// Remove all existing child elements (with class "cell") and replace them with nothing
	container.replaceChildren();
	// Update CSS variable
	document.documentElement.style.setProperty('--grid-size', size);
	for (let i = 0; i < size * size; i++) {
		const newDiv = document.createElement("div");
		newDiv.classList.add("cell");
		const randomHue = Math.floor(Math.random() * 360) + 1 // Generate a random number between 1 and 360
		newDiv.addEventListener("mouseenter", () => {
  		newDiv.style.backgroundColor = `hsl(${randomHue}, 100%, 50%)`;
		});
		container.appendChild(newDiv);
	}
}

//Build initial grid when page loads with default 16x16 size
createGrid(16);

eraseBtn.addEventListener("click", () => {
	const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

sizeBtn.addEventListener("click", () => {
	let gridSize = Number(window.prompt("Enter desired grid dimension between 1 and 100 (i.e. 16 for 16x16 grid)", 16));
	if (gridSize > 0 && gridSize <= 100) {
    createGrid(gridSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});
