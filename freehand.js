const pencil = document.getElementById("pencil");
let isPencilActive = false ;// initially pencil is inactive

const colorPicker = document.getElementById("color-picker");


colorPicker.addEventListener("change", () => {

    drawingColor = colorPicker.value ;
    c.strokeStyle = drawingColor;
    //console.log(drawingColor);
});

pencil.addEventListener("click", onPencilClick) ;

function onPencilClick() {
    pencil.classList.toggle("active");
    

    isPencilActive = !isPencilActive; 
    
    if(isPencilActive) {

        canvas.style.cursor = "crosshair";
        canvas.addEventListener("mousedown", onMouseDown); 
    }
    else {
        canvas.style.cursor = "auto";
        canvas.removeEventListener("mousedown", onMouseDown);
    }
}

