const container = document.querySelector(".container");
//const body = document.querySelector("body");
const btn = document.querySelector(".usr-btn");

 let pixel;


container.addEventListener("mouseover", (e)=> {
    if (e.target == container) {
        return;
    } else{
        e.target.style.opacity = increaseOpacity(e.target.style.opacity);
    }
 })

 btn.addEventListener("click", getUserSelection)

function redraw(argGrid, argWidth){
    container.innerHTML = "";
    for (let i = 0; i < argGrid; i++) {
        pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = argWidth + "px";
        pixel.style.height = argWidth + "px";
        pixel.style.borderRadius = argWidth / 12.5 + "px";
        pixel.style.border= "solid " + argWidth / 100 + "px " + "grey"

        container.appendChild(pixel);
    }

}

function getUserSelection() {
    let rows = prompt("How many Pixels do you want?", 16);
    let grid = rows ** 2;
    let width = 830 / rows;    
    redraw(grid, width);
}

function increaseOpacity(num) {
    let value = num * 10; // added "* 10" because the returned value would behave stangly "opacity would be 0.1 then 0.11 then 0.111 etc... instead of incermenting to 0.2 then 0.3 etc..."
    value ++;
    return value / 10;
}




redraw(256, 50); //initialize