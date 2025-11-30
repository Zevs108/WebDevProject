"use strict";
const introText = "Monday -- DAY 1";
const introTag = document.getElementById('introScreen');
const screenTag = document.getElementById('gameScreen');

const startSceneInfo = {
	'scene_1' : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["What is happening? Is it off?"],
		'nextScene': 'scene_2'
		},
	'scene_2' : {
		'img': "../assets/hornet.jpg", 
		'text': ["Oh, it's rebooting.", "I guess I will just wait?"],
		'nextScene': 'scene_3'
		},
	'scene_3' : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["Ok, that was weird.", "Maybe some prank?", "Whatever, I need to keep working on my assignement. Time to lock in."],
		'nextScene': 'scene_4'
		},
	'scene_4' : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["6 hours later."],
		'nextScene': 'scene_5'
		},
	'scene_5' : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["I am going to die, it's time to go home..."],
		'nextScene': 'scene_6'
		},
	'scene_6' : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["I hate the 1 hour of metro"],
		'nextScene': 'scene_7'
		},
	'scene_7' : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["FINALY, some sleep."],
		'nextScene': 'scene_8'
		},
	'scene_8' : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["I had a good dream.", "I can't quite remember it. Someone touching my hand, a smile, a good feeling. "],
		'nextScene': 'scene_9'
		},
	'scene_9' : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["I got 8 hours of sleep and still feel tired.", "What is wrong with me?"],
		'nextScene': 'scene_10'
		},
	'scene_10' : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["you arrive at 6:50am.", "You leave your lunch as per usual and make your way to the lounge."],
		'nextScene': 'scene_11'
		},
	'scene_11' : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["Wait. Where is the door?", "Hello? What happened?"],
		'nextScene': 'scene_12'
		},
	'scene_12' : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["Should I go to class?", "Maybe Daniel is there.", "I could ask him what happened."],
		'nextScene': 'scene_13'
		},
	'scene_13' : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["Here is Daniel. Should I tell him about the missing lounge?"],
		'nextScene': null
		},
	'scene_14_YES' : {
		'img': "../assets/hollowknight.jpg", 
		'text': [
			"Hey Daniel ! Do you know what happened to the lounge?", 
			"What do you mean? What lounge?",
			"The computer science lounge. The door is missing?",
			"There was a computer science lounge? I didn't even know that.",
			"Wait. But, you were sitting there yesterday.",
			"Yesterday ? I was here working on my compiler the whole day?",
			"...",
			"Is everything ok?",
			"I guess. Maybe I am still sleeping. Well, I have my project due tomorrow, so time to get to work."],
		'nextScene': 'scene_14_NO'
		},
	'scene_14_NO' : {
		'img': "../assets/hollowknight.jpg", 
		'text': ["0OTHER TEXT IS HERE", "0AGAIN TEXT IS HERE"]
		},
}

// scene 4 + 8 -- black screen
// after scene 8 -- new day screen
// scene 13 -- choice buttons
// scene 16 -- text on screen

const textTag = document.getElementById('text');
const imageTag = document.getElementById('image');
let currentScene = 'scene_1';
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
	if (startSceneInfo[currentScene]['text'][countText] === undefined){
		currentScene = startSceneInfo[currentScene]['nextScene']; countText = 0;
		imageTag.style.backgroundImage = `url(${startSceneInfo[currentScene]['img']})`;
	}

	console.log(currentScene);

	printText(tag, startSceneInfo[currentScene]['text'][countText])
		.then(checkForChoice)
		.then(() => document.body.addEventListener('click', clickHandler)); countText++;
}

async function checkForChoice(){
	if(currentScene === 'scene_13') await getChoice();
}

const choiceScenes = {
	0: ['scene_14_YES', 'scene_14_NO'],
	1: ['scene_14_YES', 'scene_14_NO'],
	2: ['scene_14_YES', 'scene_14_NO'],
	3: ['scene_14_YES', 'scene_14_NO'],
}
async function getChoice(){
    const choiceTag = document.getElementById('choice' + choiceCount);
    const btn1 = choiceTag.firstElementChild;
    const btn2 = choiceTag.lastElementChild;

    choiceTag.style.display = 'block';

    await new Promise(resolve => {
        choiceTag.addEventListener('click', (e) => {
			if (e.target === btn1) {
				startSceneInfo[currentScene]['nextScene'] = choiceScenes[choiceCount][0];
			} else if (e.target === btn2) {
				startSceneInfo[currentScene]['nextScene'] = choiceScenes[choiceCount][1];
			}

			resolve();
		});
    });

	choiceTag.style.display = 'none'; choiceCount++;
}


async function printText(tag, text){
	for(let i=0; i<text.length;i++){
		tag.textContent += text[i];
		await new Promise(resolve => setTimeout(resolve, 5));
	}
}