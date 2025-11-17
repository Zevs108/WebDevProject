"use strict";
const text = ["SOME TEXT IS HERE", "OTHER TEXT IS HERE", "AGAIN TEXT IS HERE"];
const textTag = document.getElementById('text');

document.body.addEventListener('click', changeText);

let i = 0;
function changeText(){
	textTag.textContent = "";

	if(text[i] === undefined){
		i = 0;
		j++;
	}

	printText(textTag, text[i]); i++;
}

async function printText(tag, text){
	for(let i=0; i<text.length;i++){
		tag.textContent += text[i];
		await new Promise(resolve => setTimeout(resolve, 100));
	}
}