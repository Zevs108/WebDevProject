'use strict';
//Making the dialogue on the bottom of the screen change
const dialogue = document.querySelector('p');
const screenDialogue = [
    'Hi how you doin',
    'Im doing great too',
    'Have you looked around yet?'
];
let i = 0;
document.addEventListener('click', runDialogue);
function runDialogue(e){
    dialogue.textContent = screenDialogue[i];
    i++;
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
document.addEventListener('click', changeScreen);
function changeScreen(e){
    screen.style.backgroundImage = screenImages[i];
}