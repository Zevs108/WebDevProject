"use strict";
const introText = "Monday -- DAY 1";
const introTag = document.getElementById('introScreen');
const screenTag = document.getElementById('gameScreen');
printText(introTag, introText)
	.then(handleDisplay);

const sceneInfo = {
	0 : ["0OTHER TEXT IS HERE", "0AGAIN TEXT IS HERE"],
	1 : ["1SOME TEXT IS HERE", "1OTHER TEXT IS HERE", "1AGAIN TEXT IS HERE"],
	2 : ["2SOME TEXT IS HERE", "2OTHER TEXT IS HERE", "2AGAIN TEXT IS HERE"],
}

const imageSrc = [
	"../assets/hollowknight.jpg",
	"../assets/hornet.jpg",
	"../assets/logo.png"
];

const textTag = document.getElementById('text');
const imageTag = document.getElementById('image');
let countScene = 0;
let countText = 0

const clickHandler = (event) => {progressGame(textTag);}
document.body.addEventListener('click', clickHandler);

async function handleDisplay(){
	setTimeout(() => {introTag.style.display="none"; screenTag.style.display="block"}, 3000);
}

function progressGame(tag){
	document.body.removeEventListener('click', clickHandler);

	tag.textContent = "";
	if (sceneInfo[countScene][countText] === undefined){
		countScene++; countText = 0;
		imageTag.style.backgroundImage = `url(${imageSrc[countScene]})`;
	}

	printText(tag, sceneInfo[countScene][countText])
		.then(() => document.body.addEventListener('click', clickHandler)); countText++;
}

async function printText(tag, text){
	for(let i=0; i<text.length;i++){
		tag.textContent += text[i];
		await new Promise(resolve => setTimeout(resolve, 50));
	}
}