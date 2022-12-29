function revealMessage() {
    document.getElementById("hiddenMessage").style.display = "block";
}
function Message() {
    document.getElementById("hiddenMessage").style.display = "none";
}
function revealMessage2() {
    document.getElementById("hiddenMessage2").style.display = "block";
}
function Message2() {
    document.getElementById("hiddenMessage2").style.display = "none";
}
function revealMessage3() {
    document.getElementById("hiddenMessage3").style.display = "block";
}
function Message3() {
    document.getElementById("hiddenMessage3").style.display = "none";
}
function revealMessage4() {
    document.getElementById("hiddenMessage4").style.display = "block";
}
function Message4() {
    document.getElementById("hiddenMessage4").style.display = "none";
}
function revealMessage5() {
    document.getElementById("hiddenMessage5").style.display = "block";
}
function Message5() {
    document.getElementById("hiddenMessage5").style.display = "none";
}
function revealMessage6() {
    document.getElementById("hiddenMessage6").style.display = "block";
}
function Message6() {
    document.getElementById("hiddenMessage6").style.display = "none";
}

function changebgcolor() {
    document.getElementById("paragraphe").style.Color = 'red';
}

let span = document.querySelector(".up");

window.onscroll = function () {

    if (this.scrollY >= 516) {
        span.classList.add("show");
    } else {
        span.classList.remove("show");
    }
}
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })

}