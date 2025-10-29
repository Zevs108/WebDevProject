"use strict";
const imgLogo = document.querySelector("#logo");
const content_label = document.querySelector("#contentAnim");

const content1 = document.querySelector("#content1");
const content2 = document.querySelector("#content2");
const body = document.querySelector("body");

content_label.addEventListener("click", () => bgAnim());

function bgAnim() {
    imgLogo.style.animationPlayState = "running";
    setTimeout(() => {body.style.backgroundImage = 'url("assets/glitch4.png")';
        toHide(content1);
        toShow(content2, "flex")},800);
}

function toHide(elem){
    elem.style.display = "none";
}
function toShow(elem, type){
    elem.style.display = type;
}