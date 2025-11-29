"use strict";
const introText = "Monday -- DAY 1";
const introTag = document.getElementById('introScreen');
const screenTag = document.getElementById('gameScreen');

const startSceneInfo = {
	0 : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["What is happening? Is it off?"]
		},
	1 : {
		'img': "../assets/hornet.jpg", 
		'text': ["Oh, it's rebooting.", "I guess I will just wait?"]
		},
	2 : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["Ok, that was weird.", "Maybe some prank?", "Whatever, I need to keep working on my assignement. Time to lock in."]
		},
	3 : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["6 hours later."]
		},
	4 : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["I am going to die, it's time to go home..."]
		},
	5 : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["I hate the 1 hour of metro"]
		},
	6 : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["FINALY, some sleep."]
		},
	7 : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["I had a good dream.", "I can't quite remember it. Someone touching my hand, a smile, a good feeling. "]
		},
	8 : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["I got 8 hours of sleep and still feel tired.", "What is wrong with me?"]
		},
	9 : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["you arrive at 6:50am.", "You leave your lunch as per usual and make your way to the lounge."]
		},
	10 : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["Wait. Where is the door?", "Hello? What happened?"]
		},
	11 : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["Should I go to class?", "Maybe Daniel is there.", "I could ask him what happened."]
		},
	12 : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["Here is Daniel. Should I tell him about the missing lounge?"]
		},
	13 : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["0OTHER TEXT IS HERE", "0AGAIN TEXT IS HERE"]
		},
	14 : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["0OTHER TEXT IS HERE", "0AGAIN TEXT IS HERE"]
		},
	112 : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["Hey Daniel ! Do you know what happened to the lounge?", 
			"What do you mean? What lounge?",
			"The computer science lounge. The door is missing?",
			"There was a computer science lounge? I didn't even know that.",
			"Wait. But, you were sitting there yesterday.",
			"Yesterday ? I was here working on my compiler the whole day?",
			"...",
			"Is everything ok?",
			"I guess. Maybe I am still sleeping. Well, I have my project due tomorrow, so time to get to work."]
		},
	113 : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["0O123123THER TEXT IS HERE", "0AGAIN TEXT IS HERE"]
		},
	114: {
		'img': "../assets/hollowknight.jpg", 
		'text': ["0OT123123HER TEXT IS HERE"]
		},
}

const choicesInfo = {
	0 : null,
	1 : null,
	2 : null,
	3 : null,
	4 : null,
	5 : null
}
// scene 4 + 8 -- black screen
// after scene 8 -- new day screen
// scene 13 -- choice buttons
// scene 16 -- text on screen

const textTag = document.getElementById('text');
const imageTag = document.getElementById('image');
let countScene = 0;
let countText = 0;
let choiceCount = 0;

const clickHandler = (event) => {progressGame(textTag);}
document.body.addEventListener('click', clickHandler);

async function handleDisplay(){
	setTimeout(() => {introTag.style.display="none"; screenTag.style.display="block"}, 3000);
}

function progressGame(tag){
	document.body.removeEventListener('click', clickHandler);

	tag.textContent = "";
	if (startSceneInfo[countScene]['text'][countText] === undefined){
		countScene++; countText = 0;
		imageTag.style.backgroundImage = `url(${startSceneInfo[countScene]['img']})`;
	}

	console.log(countScene);

	printText(tag, startSceneInfo[countScene]['text'][countText])
		.then(checkForChoice)
		.then(() => document.body.addEventListener('click', clickHandler)); countText++;
}

async function checkForChoice(){
	if(countScene == 12 || countScene == 14) await getChoice();
}

async function getChoice(){
    const choiceTag = document.getElementById('choice' + choiceCount);
    const btn1 = choiceTag.firstElementChild;
    const btn2 = choiceTag.lastElementChild;

    choiceTag.style.display = 'block';

    await new Promise(resolve => {
        choiceTag.addEventListener('click', (e) => {
			if (e.target === btn1) {
				choicesInfo[choiceCount] = true;
			} else if (e.target === btn2) {
				choicesInfo[choiceCount] = false;
			}

			resolve();
		});
    });

	changeSceneForChoice();
	choiceTag.style.display = 'none'; choiceCount++;
}

function changeSceneForChoice(){
	
}


async function printText(tag, text){
	for(let i=0; i<text.length;i++){
		tag.textContent += text[i];
		await new Promise(resolve => setTimeout(resolve, 5));
	}
}