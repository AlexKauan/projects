const circulo = document.getElementById("ball");

function mover(event) {
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}

window.addEventListener("mousemove", mover);
