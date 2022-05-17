// SCRIPT for MINEFIELD

// in base alla selezione da parte dell'utente, generare un quadrato 10x10, 9x9 o 7x7 
// al click della .cell , la .cell diventa blue
//difficulties

const easy = document.getElementById("easy");
const normal = document.getElementById("normal");
const hard = document.getElementById("hard");

const selectCell = document.querySelector("div.cell");

const grid = document.querySelector("div.grid");


easy.addEventListener("click", function(){
        easy.classList.add("selected");
        grid.innerHTML="";
        normal.disabled = true;
        hard.disabled = true;
        for(i= 0; i < 100; i++){
            let newDiv = document.createElement("div");
            newDiv.classList.add("cell-easy")
            newDiv.classList.add("cell");
            grid.append(newDiv);
        }
        
})

normal.addEventListener("click", function(){
        easy.disabled = true;
        normal.classList.add("selected");
        hard.disabled = true;

})
hard.addEventListener("click", function(){
    easy.disabled = true;
    normal.disabled = true;
    hard.classList.add("selected");

})


//Selecting a cell and turning it blue
hard.addEventListener("click", function(){
    easy.disabled = true;
    normal.disabled = true;
    hard.classList.add("selected");

})


