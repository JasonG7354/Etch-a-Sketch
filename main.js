const button = document.querySelector("#newGrid");
const body = document.querySelector("body");
const row = 16;





createGrid(row);

button.addEventListener("click", () => {
    let newGridCount = prompt("Enter the area amount of new rows:");
    if (isNaN(newGridCount)) {
        newGridCount = prompt("Invalid input. Please enter a number:");
    } else {
        const allDivs = document.querySelectorAll("div");
        allDivs.forEach(div => {
            div.remove();
        });
        createGrid(Number(newGridCount));

    }
})

function createGrid(gridSize){
    for (let i = 0; i < gridSize; i++){
        let newDiv = document.createElement("div");
        newDiv.className = "container";
        body.appendChild(newDiv);
        for (let j = 0; j < gridSize; j++){
            let newBox = document.createElement("div");
            newBox.className = "box";
            newDiv.appendChild(newBox);
            newBox.addEventListener("mouseover", () => {
            newBox.style.backgroundColor = "blue";
    });
    }
    
};

}


    
