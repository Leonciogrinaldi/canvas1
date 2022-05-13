var canvas=document.getElementById("My_canvas");
var usar=canvas.getContext("2d");
var color="cyan";
var pintura="empty";

canvas.addEventListener("mousedown",dar_click);
function dar_click(h){
    var mousex=h.clientX - canvas.offsetLeft;
    var mouseg=h.clientY - canvas.offsetTop;
    console.log("x="+mousex);
    console.log("g="+mouseg);
    pintura="mousedown";
}

canvas.addEventListener("mouseup",soltar_mouse);
function soltar_mouse(h){
    pintura="mouseup";
}

canvas.addEventListener("mouseleave",alejar_mouse);
function alejar_mouse(h){
    pintura="mouseleave";
}

canvas.addEventListener("mousemove",move_mouse);
function move_mouse(h){
    var cordenadas_actualesx=h.clientX - canvas.offsetLeft;
    var cordenadas_actualesy=h.clientY - canvas.offsetTop;
    if(pintura=="mousedown"){
        usar.beginPath();
        usar.strokeStyle=color;
        console.log("ultimas cordenadas");
        usar.moveTo(cordenadas_anterioresx,cordenadas_anterioresy);
        usar.lineTo(cordenadas_actualesx,cordenadas_actualesy);
        usar.stroke();
    }
    cordenadas_anterioresx=cordenadas_actualesx;
    cordenadas_anterioresy=cordenadas_actualesy;
}