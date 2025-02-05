
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


let color = true;


function cell_hover_color_style(event){
    // console.log(event.target.className);
    if (event.target.className=="grid-cell"){
        let a = getRandomInt(0,256);
        let b = getRandomInt(0,256);
        let c = getRandomInt(0,256);
        if (color==false) a=b=c=0;
        event.target.style.backgroundColor = `rgb(${a},${b},${c})`;
        if (initial_opacity<1){
            event.target.style.opacity = (initial_opacity+=0.1);
        }
        event.target.classList.remove("grid-cell");
    }
}


container.addEventListener("mouseover", cell_hover_color_style);

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

let modes_buttons = document.querySelector(".modes-buttons");

modes_buttons.addEventListener("click", (event) => {
    if (event.target.id=="color-btn"){
        initial_opacity=0.1;
        color = true;
        container.removeEventListener("mouseover",cell_hover_color_style);
        container.addEventListener("mouseover", cell_hover_color_style);
    }
    else if(event.target.id=="reset-btn"){
        initial_opacity=0.1;
        generate_grid(grid_size);
    }
    else if(event.target.id=="black-btn"){
        initial_opacity=0.1;
        color = false;
        container.removeEventListener("mouseover",cell_hover_color_style);
        container.addEventListener("mouseover", cell_hover_color_style);

    }
});