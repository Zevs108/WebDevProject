'use strict';
//Making the dialogue on the bottom of the screen change
const dialogue = document.getElementById('words');
const links = document.getElementById('continue');
const startingDialogue = [
  'starting first sentence',
  'starting second sentence',
  'starting third sentence'
];
const secondDialogue = [
  'second first sentence',
  'second second sentence',
  'second third sentence'
];
const endingDialogue = [
  'end first sentence',
  'end second sentence',
  'end third sentence'
];
const screenDialogue = [
    startingDialogue,
    secondDialogue,
    endingDialogue
];
let i = 0;
let j = 0;
document.addEventListener('click', runDialogue);
function runDialogue(e){
    let currentDialogue = screenDialogue[i];
    dialogue.textContent = currentDialogue[j];
    j++;
    //Changes to new set of dialogue and changes the image on screen
    if (j > currentDialogue.length){
      j = 0;
      i++;
      changeScreen();
    }
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
const screen = document.getElementById('screen');
const screenImages = [
  " ",
  "url('../assets/hornet.jpg')",
  "url('../assets/NeoVim.jpg')",
  "url('../assets/windows.jpg')",
];
function changeScreen(){
    screen.style.backgroundImage = screenImages[i];
}
//Make function to branchout from intro
const ignoreButton = document.createElement('button');
const openButton = document.createElement('button');
if (screen.style.backgroundImage === "url('../assets/windows.jpg')"){
  ignoreButton.textContent = 'Ignore It';
  openButton.textContent = 'Open It';
  dialogue.appendChild(ignoreButton);
  dialogue.appendChild(openButton);
}

const output = document.querySelector('h3');
const radioBtns = document.querySelectorAll('input[type="radio"]');
const voteBtn = document.querySelector('button');
const text = document.querySelector('input[type="textarea"]');
voteBtn.addEventListener('click', didVote);

function didVote(e){
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