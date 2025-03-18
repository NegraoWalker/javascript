const element = document.getElementById("changeColor");

element.addEventListener("mouseover", addBackgroundColorRed);

element.addEventListener("mouseout", addBackgroundColorAqua);

function addBackgroundColorRed() {
    element.style.backgroundColor = "red";
}

function addBackgroundColorAqua() {
    element.style.backgroundColor = "aqua";
}