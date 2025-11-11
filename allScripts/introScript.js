'use strict';
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
