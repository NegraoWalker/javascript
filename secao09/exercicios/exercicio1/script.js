const element = document.getElementById("changeColor");

element.addEventListener("mouseover", function () {
    element.style.backgroundColor = "red";
})

element.addEventListener("mouseout", function () {
    element.style.backgroundColor = "aqua";
})