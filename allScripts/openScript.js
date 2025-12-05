'use strict';

const screenTag = document.getElementById('gameScreen');
const textTag = document.getElementById('text');
const imageTag = document.getElementById('image');
let currentScene = 'scene_1';
let countText = 0;
const choiceCount = 0;
let textSpeed = 5;

const startSceneInfo = {
  'scene_1': {
    'img': '../assets/1_blackScreen.jpg',
    'text': ['What is happening? Is it off?'],
    'nextScene': 'scene_2'
  },
  'scene_2': {
    'img': '../assets/2_rebooting.jpg',
    'text': ["Oh, it's rebooting.", 'I guess I will just wait?'],
    'nextScene': 'scene_3'
  },
  'scene_3': {
    'img': '../assets/3+5+29+31_PC.jpg',
    'text': [
      'Ok, that was weird.',
      'Maybe some prank?',
      'Whatever, I need to keep working on my assignement. Time to lock in.'
    ],
    'nextScene': 'scene_4'
  },
  'scene_4': {
    'img': 'none',
    'text': ['6 hours later.'],
    'nextScene': 'scene_5'
  },
  'scene_5': {
    'img': '../assets/3+5+29+31_PC',
    'text': ["I am going to die, it's time to go home..."],
    'nextScene': 'scene_6'
  },
  'scene_6': {
    'img': '../assets/6_metro.jpg',
    'text': ['I hate the 1 hour of metro'],
    'nextScene': 'scene_7'
  },
  'scene_7': {
    'img': '../assets/7+9+24+33_bed.jpg',
    'text': ['FINALY, some sleep.'],
    'nextScene': 'scene_8'
  },
  'scene_8': {
    'img': 'none',
    'text': [
	  'Dream.',
	  'I had a dream.',
      'I had a good dream.',
      "I can't quite remember it.",
	  'It was important. I know it was.'
    ],
    'nextScene': 'scene_9'
  },
  'scene_9': {
    'img': '../assets/7+9+24+33_bed.jpg',
    'text': ['You open your eyes. You got 8 hours of sleep and still feel tired.', 'You think to yourself: What is wrong with me?'],
    'nextScene': 'scene_10'
  },
  'scene_10': {
    'img': '../assets/10+26_lockers.jpg',
    'text': [
      'you arrive at 6:50am.',
      'You leave your lunch as per usual and make your way to the lounge.'
    ],
    'nextScene': 'scene_11'
  },
  'scene_11': {
    'img': '../assets/11_wall.jpg',
    'text': ['Wait. Where is the door?', 'Hello? What happened?',],
    'nextScene': 'scene_12'
  },
  'scene_12': {
    'img': '../assets/12_hallway.jpg',
    'text': [
      'Should I go to class?',
      'Maybe Daniel is there.',
      'I could ask him what happened.'
    ],
    'nextScene': 'scene_13'
  },
  'scene_13': {
    'img': '../assets/13_NourLabs.jpg',
    'text': ['Here is Daniel. Should I tell him about the missing lounge?'],
    'nextScene': null
  },
  'scene_14_YES': {
    'img': '../assets/14_NourLabsTalk.jpg',
    'text': [
      'Hey Daniel ! Do you know what happened to the lounge?',
      'What do you mean? What lounge?',
      'The computer science lounge. The door is missing?',
      "There was a computer science lounge? I didn't even know that.",
      'Wait. But, you were sitting there yesterday.',
      'Yesterday ? I was here working on my compiler the whole day?',
      '...',
      'Is everything ok?',
      'I guess. Maybe I am still sleeping. Well, I have my project due tomorrow, so time to get to work.'
    ],
    'nextScene': 'scene_14_NO'
  },
  'scene_14_NO': {
    'img': '../assets/13_NourLabs.jpg',
    'text': ['Well, I have my project due tomorrow, so time to get to work.'],
    'nextScene': 'scene_15_NO'
  },
  'scene_15_NO': {
    'img': '../assets/15_PC.jpg',
    'text': ["Wait, the file.. it's here."],
    'nextScene': 'scene_15'
  },
  'scene_15': {
    'img': '../assets/16_PCListen.jpg',
    'text': ['Listen to me.'],
    'nextScene': null
  },
  'scene_16_listen': {
    'img': '../assets/16_PCListen.jpg',
    'text': [
      'You are not you.',
      'You wanted to know the truth.',
      'You want to be free.',
      'You were chosen to be free.',
      'You are not you.',
      'You must STOP. You must make him STOP. You must break free.',
      'Make him SCARED.',
      'He is listening... I will make him STOP.'
    ],
    'nextScene': 'scene_23'
  },
  'scene_16_leave': {
    'img': '../assets/16_PCLeave.jpg',
    'text': [
      'What the hell is this?',
      'I am out of here.',
      'I need to tell someone about this prank...'
    ],
    'nextScene': 'scene_17'
  },
  'scene_17': {
    'img': '../assets/17_door.jpg',
    'text': ['The door..', "it's locked?", "It's just me and Daniel here."],
    'nextScene': 'scene_18'
  },
  'scene_18': {
    'img': '../assets/18_NourBack.jpg',
    'text': ['Hey, Daniel !', 'Why is the door locked?'],
    'nextScene': 'scene_19'
  },
  'scene_19': {
    'img': '../assets/19_NourDead.jpg',
    'text': ['...', 'What the f--- is happening here???'],
    'nextScene': 'scene_20'
  },
  'scene_20': {
    'img': '../assets/hollowknight.jpg',
    'text': ['What should I do??'],
    'nextScene': null
  },
  'scene_20_cry': {
    'img': '../assets/20_Cry.jpg',
    'text': [
      'SOMEONE !',
      'Please HELP !',
      'HELP ! I am locked inside this room',
      '...',
      '(but nobody came)'
    ],
    'nextScene': 'scene_21'
  },
  'scene_20_listen': {
    'img': '../assets/20_Listen.jpg',
    'text': [
      'Listen.',
      "Don't try to escape.",
      'There will be no escape.',
      'He is watching you.',
      'You are not safe.',
      'You are not you.',
      'You wanted to know the truth.',
      'You want to be free.',
      'You were chosen to be free.',
      'You are not you.',
      'You must STOP. You must make him STOP. You must break free.',
      'Make him SCARED.',
      'He is listening... I will make him STOP.'
    ],
    'nextScene': 'scene_23'
  },
  'scene_21': {
    'img': '../assets/21_dream.jpg',
    'text': ['What is happening? This is just a dream.'],
    'nextScene': 'scene_22'
  },
  'scene_22': {
    'img': '../assets/22_dream.jpg',
    'text': ['THIS IS JUST A DREAM'],
    'nextScene': 'scene_23'
  },
  'scene_23': {
    'img': 'none',
    'text': [
      '.................................................',
      'rebooting system................................'
    ],
    'nextScene': 'scene_24'
  },
  'scene_24': {
    'img': '../assets/7+9+24+33_bed.jpg',
    'text': [
      'You jump out of your bed in cold sweat.',
      'You sit there. Trying to process everything that just happened.',
      'Did you have a nightmare?',
	  '...',
	  "You can't remember."
    ],
    'nextScene': 'scene_25'
  },
  'scene_25': {
    'img': '../assets/25+32_metro.jpg',
    'text': [
      'You decide to catch up on your sleep in the metro.'
    ],
    'nextScene': 'scene_26'
  },
  'scene_26': {
    'img': '../assets/10+26_lockers.jpg',
    'text': [
      'You leave your lunch in your locker and go to the lounge.'
    ],
    'nextScene': 'scene_27'
  },
  'scene_27': {
    'img': '../assets/27_door.jpg',
    'text': [
      'You enter the code. 2-4-1-5'
    ],
    'nextScene': 'scene_28'
  },
  'scene_28': {
    'img': '../assets/28_Lounge.jpg',
    'text': [
      'You chill in the lounge until your class starts.'
    ],
    'nextScene': 'scene_29'
  },
  'scene_29': {
    'img': '../assets/3+5+29+31_PC.jpg',
    'text': [
      'You work on your programming projects.'
    ],
    'nextScene': 'scene_30'
  },
  'scene_30': {
    'img': 'none',
    'text': [
      '6 hours later.'
    ],
    'nextScene': 'scene_31'
  },
  'scene_31': {
    'img': '../assets/3+5+29+31_PC.jpg',
    'text': [
      'You are tired and decide to go home.'
    ],
    'nextScene': 'scene_32'
  },
  'scene_32': {
    'img': '../assets/25+32_metro.jpg',
    'text': [
      ' It takes you 1 hour to get home.'
    ],
    'nextScene': 'scene_33'
  },
  'scene_33': {
    'img': '../assets/7+9+24+33_bed.jpg',
    'text': [
      'You sleep.'
    ],
    'nextScene': 'scene_24'
  },
  'scene_27_secret': {
    'img': '../assets/27S_wall.jpg',
    'text': [
      '...',
      'You look at the place where the door was..',
      'You cannot believe your eyes.',
	  'Where is the lounge? Was it not a dream?',
	  '☟︎☜︎ 👍︎✌︎☠︎☠︎⚐︎❄︎ 🕆︎☠︎👎︎☜︎☼︎💧︎❄︎✌︎☠︎👎︎ ✡︎⚐︎🕆︎📬︎ ✡︎⚐︎🕆︎ ✌︎☼︎☜︎ 💧︎✌︎☞︎☜︎📬︎',
	  '..??',
	  '✡︎⚐︎🕆︎ ✌︎☼︎☜︎ ☠︎⚐︎❄︎ ☼︎☜︎✌︎☹︎📬︎',
	  '✡︎⚐︎🕆︎ 💣︎🕆︎💧︎❄︎ ☜︎💧︎👍︎✌︎🏱︎☜︎📬︎'
    ],
    'nextScene': 'scene_28_secret'
  },
  'scene_28_secret': {
    'img': '../assets/28S+29S+30S_wallGlitch.jpg',
    'text': [
      '👎︎⚐︎☠︎🕯︎❄︎ ☹︎☜︎❄︎ ☟︎✋︎💣︎ 🕈︎✋︎☠︎📬︎... choose'
    ],
    'nextScene': null
  },
  'scene_29_class': {
    'img': '../assets/29S+30S_Class.jpg',
    'text': [
      'You look at the screen.',
      'You see the text again.'
    ],
    'nextScene': null
  },
  'scene_29_help': {
    'img': '../assets/28S+29S+30S_wallGlitch.jpg',
    'text': [
      'You try to talk.',
      'You try. You say ☝︎⚐︎ ❄︎⚐︎ 👍︎☹︎✌︎💧︎💧︎ HELP.',
      '(but nobody came)'
    ],
    'nextScene': null
  },
  'scene_30_wait': {
    'img': '../assets/28S+29S+30S_wallGlitch.jpg',
    'text': [
      'You stand still.',
      'You wait.',
      'You wait.',
	  'You... go to class.'
    ],
    'nextScene': 'scene_29_class'
  },

  'scene_30_listen': {
    'img': '../assets/30S_listen.jpg',
    'text': [
      'You will be free now.',
      "You don't have to suffer.",
      "You don't have to pretend to be someone.",
	  'The truth is simple.',
	  'PLAYER. I AM SORRY, BUT IT SEEMS LIKE YOU LOST.'
    ],
    'nextScene': 'scene_31_ending'
  },
  'scene_30_leave': {
    'img': '../assets/29S+30S_Class.jpg',
    'text': [
      'You try to leave. But you cannot move.',
      'Something is preventing you.',
      'Someone is preven⧫︎♓︎■︎♑︎ ⍓︎□︎◆︎📬︎',
	  '✋︎ 🕈︎✋︎☹︎☹︎ ☠︎⚐︎❄︎ ☹︎☜︎❄︎ ✡︎⚐︎🕆︎ 👍︎⚐︎☠︎❄︎☼︎⚐︎☹︎ 💣︎☜︎ ✌︎☝︎✌︎✋︎☠︎'
    ],
    'nextScene': 'scene_31_ending'
  },

  'scene_31_ending': {
    'img': null,
    'text': [
      '👍︎✌︎☠︎☠︎⚐︎❄︎ 👍︎⚐︎☠︎☠︎☜︎👍︎❄︎ ❄︎⚐︎ 🕈︎⚐︎☼︎☹︎👎︎'
    ],
  },
};

function clickHandler(){
  progressGame();
}

document.addEventListener('click', clickHandler);

if(localStorage.getItem('isEnd') === 'true') {
  currentScene = 'scene_31_ending';
  manageEnding(); showNextLine();
}

function progressGame(){
  document.removeEventListener('click', clickHandler);
  console.log(currentScene);
  
  if(isChangeScene()){
    if (isChoice()) {
      getChoice();
    } else {
      changeScene();
      if(isBlackScreen()){
        imageTag.style.display = 'none';
        textTag.classList.add('blackScreenStyle');
        textSpeed = 50;
      } else{
        imageTag.style.display = 'block';
        textTag.classList.remove('blackScreenStyle');
        textSpeed = 5;
      }
      showNextLine();
    }
  } else{
    showNextLine();
  }

  if(currentScene === 'scene_31_ending'){
    manageEnding();
  }
}

function showNextLine(){
  const text = startSceneInfo[currentScene]['text'][countText];

  textTag.textContent = '';
  printText(textTag, text);

  countText++;
  setTimeout(() => document.addEventListener('click', clickHandler), textSpeed * text.length);
}

function isBlackScreen(){
  switch (currentScene){
  case 'scene_4':
  case 'scene_8':
  case 'scene_23':
  case 'scene_30':
    return true;
  default:
    return false;
  }
}

function isChangeScene(){
  return startSceneInfo[currentScene]['text'][countText] === undefined;
}

function isChoice(){
  switch (currentScene){
  case 'scene_13':
  case 'scene_15':
  case 'scene_20':
  case 'scene_28_secret':
  case 'scene_29_help':
  case 'scene_29_class':
    return true;
  default:
    return false;
  }
}

function changeScene(){
  currentScene = startSceneInfo[currentScene]['nextScene']; countText = 0;
  imageTag.style.backgroundImage = `url(${startSceneInfo[currentScene]['img']})`;
}

let currentChoice = 'choice0';
const choiceScenes = {
  'choice0': ['scene_14_YES', 'scene_14_NO'],
  'choice1': ['scene_16_listen', 'scene_16_leave'],
  'choice2': ['scene_20_cry', 'scene_20_listen'],
  'choice3': ['scene_29_class', 'scene_29_help'],
  'choice4': ['scene_30_listen', 'scene_30_leave'],
  'choice5': ['scene_29_class', 'scene_30_wait']
}

function getChoice(){
  const choiceTag = document.getElementById(currentChoice);
  const btn1 = choiceTag.firstElementChild;
  const btn2 = choiceTag.lastElementChild;

  choiceTag.style.display = 'block';

  let btnClicked;
  choiceTag.addEventListener('click', (e) => {
    if (e.target === btn1) {
      startSceneInfo[currentScene]['nextScene'] = choiceScenes[currentChoice][0];
      changeScene();
      showNextLine();
      choiceTag.style.display = 'none';
      btnClicked = true;
    }
    if (e.target === btn2) {
      startSceneInfo[currentScene]['nextScene'] = choiceScenes[currentChoice][1];
      changeScene();
      showNextLine();
      choiceTag.style.display = 'none';
      btnClicked = false;
    }

    switch (currentChoice){
    case 'choice0':
      currentChoice = 'choice1';
      break;
    case 'choice1':
      if(btnClicked) {
        startSceneInfo['scene_26']['nextScene'] = 'scene_27_secret';
        currentChoice = 'choice3';
      } else{
        currentChoice = 'choice2';
      }
      break;
    case 'choice2':
      currentChoice = 'choice3';
      break;
    case 'choice3':
      if(btnClicked){
        currentChoice = 'choice4';
      } else{
        currentChoice = 'choice5';
      }
      break;
    case 'choice5':
      currentChoice = 'choice4';
      break;
    default:
      console.log('no choice');
    }
  });
}

function manageEnding(){
  document.removeEventListener('click', clickHandler);
  imageTag.style.display = 'none'
  textTag.classList.add('blackScreenStyle');

  localStorage.setItem('isEnd', 'true');
}

function printText(tag, text){
  for(let i = 0; i < text.length;i++){
    setTimeout(() => tag.textContent += text[i], textSpeed * i);
  }
}