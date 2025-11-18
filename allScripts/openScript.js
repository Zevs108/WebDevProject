"use strict";
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

document.body.addEventListener('click', () => progressGame(event, textTag));


function progressGame(event,tag){
	tag.textContent = "";
	if (sceneInfo[countScene][countText] === undefined){
		countScene++; countText = 0;
		imageTag.style.backgroundImage = `url(${imageSrc[countScene]})`;
	}
	printText(tag, sceneInfo[countScene][countText]); countText++;
}

async function printText(tag, text){
	for(let i=0; i<text.length;i++){
		tag.textContent += text[i];
		await new Promise(resolve => setTimeout(resolve, 100));
	}
}