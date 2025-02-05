
grid_size = 16;

function generate_grid(size){
    let container = document.querySelector(".container");
    container.innerHTML ="";
    let cell_size = 80/size;
    cell_size = cell_size+"vh";
    for(let i=1; i<=size*size; i++){
        let new_div = document.createElement("div");
        new_div.classList.add("grid-cell");
        new_div.style.width = cell_size;
        new_div.style.height = cell_size;
        // new_div.style.border = "1px solid red";
        container.appendChild(new_div);
    }
}

let initial_opacity=0.1;

let container = document.querySelector(".container");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

container.addEventListener("mouseover", (event) => {
    console.log(event.target.className);
    if (event.target.className=="grid-cell"){
        let a = getRandomInt(0,256);
        let b = getRandomInt(0,256);
        let c = getRandomInt(0,256);

        event.target.style.backgroundColor = `rgb(${0},${0},${0})`;
        if (initial_opacity<1){
            event.target.style.opacity = (initial_opacity+=0.1);
        }
        event.target.classList.remove("grid-cell");
    }
});



let btn = document.querySelector("#user-grid-size");

btn.addEventListener("click", ()=>{
    let user_input = prompt("Enter grid size value (s) between 1-100: ",16);
    user_input = parseInt(user_input);
    if (user_input>=1 && user_input<=100){
        grid_size=user_input;
        console.log("Grid size changed successfully!");
        generate_grid(grid_size);
    }
    else console.log("Invalid value!! Grid size was not changed");
    
});


generate_grid(grid_size);