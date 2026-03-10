'use strict';
//Making the dialogue on the bottom of the screen change
const dialogue = document.getElementById('words');
const openBtn = document.getElementById('open');
const ignoreBtn = document.getElementById('ignore');
const screen = document.getElementById('screen');

const dialogue1 = [
  'I wake up feeling tired',
  'I did not get enough sleep from last night',
  'My day at school is from 8am to 8pm with no breaks',
  '... Guess this is life after highschool: college life',
  'I know what I HAVE to do',
  'Brush my teeth',
  'take a shower',
  'eat breakfast',
  'get my stuff together',
  'and take the train, then the bus, and the metro',
  'to finally go to school', 
  'were I will spend the whole day studying',
  'I chose this after all',
  'so I might as well do it.',
  'I have three assignments coming up',
  'And none that I actually want to do',
  'Programming, Web Dev, and Infrastructure',
  'At least I have friends',
  'That can be my motivation through this',
  'Do not fail... no, I CANNOT fail.'
];
const dialogue2 = [
  'you arrive at 7am',
  'you leave your lunch in the locker',
  'and make your way to a special lounge', 
  'for students like you',
  'Computer Science students',
  'You have some time to kill before your first class.'
];
const dialogue3 = [
  '... you know the code. 2-4-1-5. you enter.'
];
const dialogue4 = [
  'you see a familiar face',
  'always sitting in the lounge',
  'no matter when you come',
  'This guy is Daniel,',
  'the programming addict',
  'One of your crazy friends',
  'He did not seem to notice you',
  'so you decide to come up closer.',
  'Hey whats up ! what are you doing?'
];
const dialogue5 = [
  'Daniel: Hi. I am currently working on this',
  '* Points to computer *',
  'What is this',
  'Daniel: I decided to write a compiler for this tiny',
  'Daniel: custom language I designed',
  'Daniel: Think of it as a really stripped-down C',
  'Daniel: but with type inference',
  'Daniel: just to make my life harder, obviously',
  'Daniel: The initial stages were rough',
  'Daniel: but manageable', 
  'Daniel: I spent about two weeks',
  'Daniel: just wrestling with Lexing and Parsing',
  'Daniel: You know, getting all the tokens identified',
  'Daniel: building the Abstract Syntax Tree (AST)',
  'Daniel: its mostly just glorified tree construction ',
  'Daniel: based on a grammar, right?',
  'Daniel: Lots of recursive descent functions',
  'Daniel: I even cheated',
  'Daniel: I used a parser generator for the first pass',
  'Daniel: just to save my sanity',
  'Daniel: but I am planning to write a manual one later.',
  'This is cool',
  'Daniel: thanks ! I will keep working on it',
  'Daniel:we have about an hour left until class right?',
  'Yeah i will just sit on the couch and take some rest'
];
const dialogue6 = [
  'You contemplate your life decisions' , 
  'as the time slowly passes',
  'You close your eyes for a second...'
];
const dialogue7 = [
  'sleep is all you need'
];
const dialogue8 = [
  'I think I should go to class.'
];
const dialogue9 = [
  'I have to work',
  'on my Programmation assignement',
  'Lets start coding !'
];
const dialogue10 = [
  'Wait. What is this file?',
  'Should i open it'
];
const screenDialogue = [
    dialogue1,
    dialogue2,
    dialogue3,
    dialogue4,
    dialogue5,
    dialogue6,
    dialogue7,
    dialogue8,
    dialogue9,
    dialogue10,
];
let i = 0;
let j = 0;
screen.addEventListener('click', runDialogue);
function runDialogue(){
  let currentDialogue = screenDialogue[i];
  dialogue.textContent = currentDialogue[j];
  
  j++;
  //Changes to new set of dialogue and changes the image on screen
  if (j > currentDialogue.length){
    j = 0;
    i++;
    changeScreen();
  }
  if (i >= screenDialogue.length){
    openBtn.classList.remove('btn');
    ignoreBtn.classList.remove('btn');
  };
}

//Making key functions to make it a little more user friendly
document.addEventListener('keydown', handleKey);
function handleKey(e){
  if (e.key === ' '){
    runDialogue();
    e.preventDefault();
  }
  if (e.key === 'ArrowRight'){
    runDialogue();
    e.preventDefault();
  }
  if (e.key === 'ArrowUp'){
    runDialogue();
    e.preventDefault();
  }
}
//Making the image change on the screen change
//Make sure images are the correct size for the screen
//keep index 0 blank

const screenImages = [
  "url('../IntroAssets/1_bed.jpg')",
  "url('../IntroAssets/2_lockers.jpg')",
  "url('../IntroAssets/3_door.jpg')",
  "url('../IntroAssets/4_NourBack.jpg')",
  "url('../IntroAssets/5_NourTalk.jpg')",
  "url('../IntroAssets/6+7+8_Lounge.jpg')",
  "url('../IntroAssets/6+7+8_Lounge.jpg')",
  "url('../IntroAssets/6+7+8_Lounge.jpg')",
  "url('../IntroAssets/9_PC.jpg')",
  "url('../IntroAssets/10_PC.jpg')",
];
function changeScreen(){
    screen.style.backgroundImage = screenImages[i];
}
//Make function to branchout from intro

const output = document.querySelector('h3');
const radioBtns = document.querySelectorAll('input[type="radio"]');
const voteBtn = document.querySelector('button');
const text = document.querySelector('input[type="textarea"]');
voteBtn.addEventListener('click', didVote);

function didVote(){
  let vote = null;
  let words = text.value;
  for (const radio of radioBtns){
    if (radio.checked){
      vote = radio.value;
      break;
    }
  }
  if (vote){
    output.textContent = 'Thankyou for voting '+vote+' and your comment '+words;
  }else{
    output.textContent = 'Please make a selection';
  }
}
