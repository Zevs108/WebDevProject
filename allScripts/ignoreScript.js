'use strict';
//Making the dialogue on the bottom of the screen change
const dialogue = document.getElementById('words');
const links = document.getElementById('continue');
const firstDialogue = [
  'Wow that was a long day',
  'I have a lot of homework to do',
  'But i should take a rest first',
  'A quick nap should do'
];
const secondDialogue = [
  'Nap was great now I can work',
  'Huh, what file is this',
  'Let me check',
  '* Clicks the file *',
  '* Nothing happend *',
  'Must have been an old file I forgot to delete'
];
const thirdDialogue = [
  '* knocking on the door *',
  'I was not expecting visitors today',
  'One sec I will be there'
];
const fourthDialogue = [
  'This day sure has been full of surprises',
  '* knocking gets louder *',
  'Almost there geez',
  'Who is it',
  '* No answer *',
  'Okay is this some sort of dumb prank',
  'I have a lot of things to do so screw off'
];
const fifthDialogue = [
  'Hello?',
  'You should just quit it with the pranks',
  'I am really tired',
  'I do not have time to deal with this'
];
const sixthDialogue = [
  'Wait was is this!',
  'Oh my god!',
  'What are you leave me alone!',
  'Ahhhhhhhhhhhhhhhhhhhhhhhh!!!!!'
];
const seventhDialogue = [
  'Oh geez',
  'It was just a dream',
  'I should really take more rest',
  'Starting to see stuff because of how tired I am'
];
const blank = [];
const screenDialogue = [
    firstDialogue,
    blank,
    secondDialogue,
    thirdDialogue,
    fourthDialogue,
    fifthDialogue,
    sixthDialogue,
    blank,
    seventhDialogue
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
  "url('../assets/blackscreen.jpg')",
  "url('../assets/ignore2.jpg')",
  "url('../assets/ignore3.jpg')",
  "url('../assets/ignore4.jpg')",
  "url('../assets/ignore5.jpg')",
  "url('../assets/ignore5monster.jpg')",
  "url('../assets/blackscreen.jpg')",
  "url('../assets/ignore1.jpg')"
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
