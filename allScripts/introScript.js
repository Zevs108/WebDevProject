'use strict';
//Making the dialogue on the bottom of the screen change
const dialogue = document.querySelector('p');
const startingDialogue = [
  'starting first sentence',
  'starting second sentence',
  'starting third sentence'
]
const secondDialogue = [
  'second first sentence',
  'second second sentence',
  'second third sentence'
]
const endingDialogue = [
  'end first sentence',
  'end second sentence',
  'end third sentence'
]
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
    if (j > currentDialogue.length){
      i++;
      j = 0;
      changeScreen();
    }
}
//Making the image change on the screen change
//Make sure images are the correct size for the screen
const screen = document.getElementById('screen');
const screenImages = [
  "url('../assets/hollowknight.jpg')",
  "url('../assets/hornet.jpg')",
  "url('../assets/NeoVim.jpg')",
  "url('../assets/windows.jpg')",
];
function changeScreen(){
    screen.style.backgroundImage = screenImages[i];
}
//Making image change only after a certain set of dialogue finishes