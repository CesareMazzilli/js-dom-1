const btnElem = document.getElementById("switch-btn");
console.log(btnElem);
const imgElem = document.getElementById("lamp-img");
console.log(imgElem);

btnElem.addEventListener("click", function() {
    console.log(imgElem.src);
    if (imgElem.scroll.includes("white_lamp")) {
        imgElem.src = "./img/yellow_lamp.png";
        btnElem.innerHTML = "Spegni";
    } else {
        imgElem.src = "./img/white_lamp.png";
        btnElem.innerHTML = "Accendi";
    }
});