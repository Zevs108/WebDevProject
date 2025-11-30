"use strict";

const screenTag = document.getElementById('gameScreen');
const textTag = document.getElementById('text');
const imageTag = document.getElementById('image');
let currentScene = 'scene_1';
let countText = 0;
let choiceCount = 0;
let textSpeed = 5;

let startSceneInfo = {
  "scene_1": {
    "img": "../assets/hollowknight.jpg",
    "text": ["What is happening? Is it off?"],
    "nextScene": "scene_2"
  },
  "scene_2": {
    "img": "../assets/hornet.jpg",
    "text": ["Oh, it's rebooting.", "I guess I will just wait?"],
    "nextScene": "scene_3"
  },
  "scene_3": {
    "img": "../assets/hollowknight.jpg",
    "text": [
      "Ok, that was weird.",
      "Maybe some prank?",
      "Whatever, I need to keep working on my assignement. Time to lock in."
    ],
    "nextScene": "scene_4"
  },
  "scene_4": {
    "img": "none",
    "text": ["6 hours later."],
    "nextScene": "scene_5"
  },
  "scene_5": {
    "img": "../assets/hollowknight.jpg",
    "text": ["I am going to die, it's time to go home..."],
    "nextScene": "scene_6"
  },
  "scene_6": {
    "img": "../assets/hollowknight.jpg",
    "text": ["I hate the 1 hour of metro"],
    "nextScene": "scene_7"
  },
  "scene_7": {
    "img": "../assets/hollowknight.jpg",
    "text": ["FINALY, some sleep."],
    "nextScene": "scene_8"
  },
  "scene_8": {
    "img": "none",
    "text": [
	  "Dream.",
	  "I had a dream.",
      "I had a good dream.",
      "I can't quite remember it.",
	  "It was important. I know it was."
    ],
    "nextScene": "scene_9"
  },
  "scene_9": {
    "img": "../assets/hollowknight.jpg",
    "text": ["You open your eyes. You got 8 hours of sleep and still feel tired.", "You think to yourself: What is wrong with me?"],
    "nextScene": "scene_10"
  },
  "scene_10": {
    "img": "../assets/hollowknight.jpg",
    "text": [
      "you arrive at 6:50am.",
      "You leave your lunch as per usual and make your way to the lounge."
    ],
    "nextScene": "scene_11"
  },
  "scene_11": {
    "img": "../assets/hollowknight.jpg",
    "text": ["Wait. Where is the door?", "Hello? What happened?",],
    "nextScene": "scene_12"
  },
  "scene_12": {
    "img": "../assets/hollowknight.jpg",
    "text": [
      "Should I go to class?",
      "Maybe Daniel is there.",
      "I could ask him what happened."
    ],
    "nextScene": "scene_13"
  },
  "scene_13": {
    "img": "../assets/hollowknight.jpg",
    "text": ["Here is Daniel. Should I tell him about the missing lounge?"],
    "nextScene": null
  },
  "scene_14_YES": {
    "img": "../assets/hollowknight.jpg",
    "text": [
      "Hey Daniel ! Do you know what happened to the lounge?",
      "What do you mean? What lounge?",
      "The computer science lounge. The door is missing?",
      "There was a computer science lounge? I didn't even know that.",
      "Wait. But, you were sitting there yesterday.",
      "Yesterday ? I was here working on my compiler the whole day?",
      "...",
      "Is everything ok?",
      "I guess. Maybe I am still sleeping. Well, I have my project due tomorrow, so time to get to work."
    ],
    "nextScene": "scene_14_NO"
  },
  "scene_14_NO": {
    "img": "../assets/hollowknight.jpg",
    "text": ["Well, I have my project due tomorrow, so time to get to work."],
    "nextScene": "scene_15_NO"
  },
  "scene_15_NO": {
    "img": "../assets/hollowknight.jpg",
    "text": ["Wait, the file.. it's here."],
    "nextScene": "scene_15"
  },
  "scene_15": {
    "img": "../assets/hollowknight.jpg",
    "text": ["Listen to me."],
    "nextScene": null
  },
  "scene_16_listen": {
    "img": "../assets/hollowknight.jpg",
    "text": [
      "You are not you.",
      "You wanted to know the truth.",
      "You want to be free.",
      "You were chosen to be free.",
      "You are not you.",
      "You must STOP. You must make him STOP. You must break free.",
      "Make him SCARED.",
      "He is listening... I will make him STOP."
    ],
    "nextScene": "scene_23"
  },
  "scene_16_leave": {
    "img": "../assets/hollowknight.jpg",
    "text": [
      "What the hell is this?",
      "I am out of here.",
      "I need to tell someone about this prank..."
    ],
    "nextScene": "scene_17"
  },
  "scene_17": {
    "img": "../assets/hollowknight.jpg",
    "text": ["The door..", "it's locked?", "It's just me and Daniel here."],
    "nextScene": "scene_18"
  },
  "scene_18": {
    "img": "../assets/hollowknight.jpg",
    "text": ["Hey, Daniel !", "Why is the door locked?"],
    "nextScene": "scene_19"
  },
  "scene_19": {
    "img": "../assets/hollowknight.jpg",
    "text": ["...", "What the f--- is happening here???"],
    "nextScene": "scene_20"
  },
  "scene_20": {
    "img": "../assets/hollowknight.jpg",
    "text": ["What should I do??"],
    "nextScene": null
  },
  "scene_20_cry": {
    "img": "../assets/hollowknight.jpg",
    "text": [
      "SOMEONE !",
      "Please HELP !",
      "HELP ! I am locked inside this room",
      "...",
      "(but nobody came)"
    ],
    "nextScene": "scene_21"
  },
  "scene_20_listen": {
    "img": "../assets/hollowknight.jpg",
    "text": [
      "Listen.",
      "Don't try to escape.",
      "There will be no escape.",
      "He is watching you.",
      "You are not safe.",
      "You are not you.",
      "You wanted to know the truth.",
      "You want to be free.",
      "You were chosen to be free.",
      "You are not you.",
      "You must STOP. You must make him STOP. You must break free.",
      "Make him SCARED.",
      "He is listening... I will make him STOP."
    ],
    "nextScene": "scene_23"
  },
  "scene_21": {
    "img": "../assets/hollowknight.jpg",
    "text": ["What is happening? This is just a dream."],
    "nextScene": "scene_22"
  },
  "scene_22": {
    "img": "../assets/hollowknight.jpg",
    "text": ["THIS IS JUST A DREAM"],
    "nextScene": "scene_23"
  },
  "scene_23": {
    "img": "none",
    "text": [
      "............................................................................",
      "............................................................................",
      "............................................................................",
      "............................................................................"
    ],
    "nextScene": "scene_24"
  },
  "scene_24": {
    "img": "../assets/hollowknight.jpg",
    "text": [
      "Should I go to class?",
      "Maybe Daniel is there.",
      "I could ask him what happened."
    ],
    "nextScene": "scene_25"
  },
  "scene_25": {
    "img": "../assets/hollowknight.jpg",
    "text": [
      "Should I go to class?",
      "Maybe Daniel is there.",
      "I could ask him what happened."
    ],
    "nextScene": "scene_26"
  }
};

// after scene 8 -- day transition

const clickHandler = (event) => progressGame();
document.body.addEventListener('click', clickHandler);

async function progressGame(){
	document.body.removeEventListener('click', clickHandler);

	if(isChangeScene()){
		if (isChoice()) await getChoice();
		currentScene = startSceneInfo[currentScene]['nextScene']; countText = 0;
		imageTag.style.backgroundImage = `url(${startSceneInfo[currentScene]['img']})`;

		if(isBlackScreen()){
			imageTag.style.display = 'none'
			textTag.classList.add('blackScreenStyle');
			textSpeed = 100;
		} else{
			imageTag.style.display = 'block'
			textTag.classList.remove('blackScreenStyle');
			textSpeed = 5;
		}
	}

	showNextLine()
		.then(() => document.body.addEventListener('click', clickHandler));

	console.log(currentScene);
}

async function showNextLine(){
	textTag.textContent = "";
	await printText(textTag, startSceneInfo[currentScene]['text'][countText]); countText++;
}

function isBlackScreen(){
	return currentScene === 'scene_4' || currentScene === 'scene_8' || currentScene === 'scene_23';
}

function isChangeScene(){
	return startSceneInfo[currentScene]['text'][countText] === undefined;
}

function isChoice(){
	return currentScene === 'scene_13' || currentScene === 'scene_15' || currentScene === 'scene_20';
}

const choiceScenes = {
	0: ['scene_14_YES', 'scene_14_NO'],
	1: ['scene_16_listen', 'scene_16_leave'],
	2: ['scene_20_cry', 'scene_20_listen'],
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
		await new Promise(resolve => setTimeout(resolve, textSpeed));
	}
}