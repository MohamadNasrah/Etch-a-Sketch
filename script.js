const container = document.querySelector(".container");
const body = document.querySelector("body");
let state;


let mouseHold = body.addEventListener("mousedown", (e)=> { //checks if mouse is held down
    e.preventDefault()
    state = true;
    console.log(state)
})
let mouseRelease = body.addEventListener("mouseup", (e)=> { //checks if mouse is released
    e.preventDefault()
    state = false;
    console.log(state)
})
let pixel;
function draw() {
    for (let i = 0; i < 256; i++) {
        pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        container.appendChild(pixel);
    }
    container.addEventListener("mouseover", (e)=> {
       if (state) { //this if statement is to make sure that the mouse only leaves a trail if the mouse is held down
        if (e.target == container) {
            return;
        } else{
            e.target.classList.add("hovered")
        }
        }
    })
}



draw();