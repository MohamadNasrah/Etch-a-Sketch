const container = document.querySelector(".container");
let pixel;
function draw() {
    for (let i = 0; i < 256; i++) {
        pixel = document.createElement("dix");
        pixel.setAttribute("class", "pixel");
        container.appendChild(pixel);
    }
    container.addEventListener("mouseover", (e)=> {
        
        if (e.target == container) {
            return;
        } else{
            e.target.style.backgroundColor = "black"
        }
 
    })
}








/*
function draw() {
    for (let i = 0; i < 16; i++ ) {
        const row = document.createElement("div");
        //row.setAttribute("class", "pixel");
        row.setAttribute("class", "pixel row");
        container.appendChild(row);
        for (let j = 0; j < 15; j++) {
            const colmn = document.createElement("div");
            //colmn.setAttribute("class", "pixel");
            colmn.setAttribute("class", "pixel colmn")
            row.appendChild(colmn);
        }
    }
}
*/