let btn = document.getElementById("meuBotao");

function handleClick() {
    console.log("Capturou o evento!");
}

btn.addEventListener("click", handleClick);

setTimeout(function() {
    btn.removeEventListener("click", handleClick);
    console.log("setTimeout finalizado!");
}, 5000);
