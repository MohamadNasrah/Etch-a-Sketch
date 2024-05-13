const container = document.querySelector(".container");
const body = document.querySelector("body");
const btn = document.querySelector(".usr-btn");


let state; //if mouse is held down or not


let mouseHold = body.addEventListener("mousedown", (e)=> { //checks if mouse is held down
    e.preventDefault()
    state = true;
    console.log(state)
})
let mouseRelease = body.addEventListener("mouseup", (e)=> { //checks if mouse is released
    //e.preventDefault()
    state = false;
    console.log(state)
})

container.addEventListener("mouseover", (e)=> {
    if (state) { //this if statement is to make sure that the mouse only leaves a trail if the mouse is held down
     if (e.target == container) {
         return;
     } else{
         e.target.classList.add("hovered")
     }
     }
 })

 btn.addEventListener("click", getUserSelection)

function draw() {
    for (let i = 0; i < 256; i++) {
        let pixel; //the initial pixels drawn on screen when loading page
        pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        container.appendChild(pixel);
    }
}

function clear() {
    container.innerHTML = "";
}

function redraw(argGrid, argWidth){
    clear();
    for (let i = 0; i < argGrid; i++) {
        let newPixel = document.createElement("div");
        newPixel.classList.add("newpixel")
        newPixel.style.width = argWidth+"px";
        newPixel.style.height = argWidth+"px";
        container.appendChild(newPixel);
    }

}

function getUserSelection() {
    let rows = prompt("How many rows do you want?", 16);
    let colmns = prompt("How many columns do you want?", 16);
    let grid = parseInt(colmns * rows);
    let width = 830 / rows;    
    redraw(grid, width);
}





draw();