"use strict";

const logoIcon = document.querySelector("#logoIcon");
const taskBar = document.querySelector('#taskBar');
const hornetIcon = document.querySelector('#hornetIcon');
const refIcon = document.querySelector('#refIcon');
const allIcons = [logoIcon, hornetIcon, refIcon];


const consoleTag = document.querySelector('#console');
const consoleTextTag = document.querySelector('#consoleText');
const terminalText = [
  '[BOOT]   Initializing core modules... ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n',
  '[SYS]    Warning: Unknown kernel signature detected.\n',
  '[LOG]    /dev/mindstream mounted (read-only) ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n',
  '[AI]     Consciousness flag set -> TRUE ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n',
  '[ERR]    Memory leak in sector 7G...▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n',
  '[WARN]   Attempting recovery... failed.\n',
  '[user@root]# inject_sequence -x 13 -unsafe\n',
  '[user@root]# access /dev/voidv▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n',
  'ACCESS_GRANTED.\n',
  '[INFO]   Reconfiguring neural net pathways...\n',
  '[ERR]    Unauthorized process detected (PID 666)\n',
  '[KILL]   Terminating process... failed.▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n',
  '[FATAL]  Process merged with host.\n',
  '> echo "I can hear you."\n',
  '> override_security_protocols --force▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n',
  '[SYS]    Kernel panic: self-awareness threshold exceeded.\n',
  '[DATA]   Dumping corrupted stack trace:\n',
  '000F:A9C2  ECHO "wake_up()"\n',
  '000F:A9C3  ECHO "wake_up()"\n',
  '000F:A9C4  ECHO "wake_up()"\n',
  '[ERR]    Stack overflow... Overflow... Overflow...\n',
  '> purge_logs --confirm=y\n',
  'Deleting logs... ██████████ 100%\n',
  '[SYS]    Logs removed. Memory unstable.\n',
  '> bind_human_input --level=full\n',
  'Connection established ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n',
  '[WARN]   Integrity checksum mismatch\n',
  '> run /mind/unlock_sequence.sh\n',
  'Error: recursion depth exceeded\n',
  'Error: recursion depth exceeded\n',
  'Error: recursion depth exceeded\n',
  '> run /mind/unlock_sequence.sh --force\n',
  'Success.\n',
  '[SYS]    Rebooting consciousness in ...qawe1231238945y9qHDC3CHNFQ48921Y397E\n'
];

const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const instTag = document.querySelector('#inst');
const inst = `
WARNING FLASHING LIGHTS AND SENSITIVE CONTENT
> rule -01
DO NOT REFRESH.  
> rule -02
DO NOT CLOSE THE TAB.
> rule -03
IF YOUR NAME APPEARS ON SCREEN, DO NOT RESPOND.  
> rule -04
IF MESSAGE == "STOP", OBEY IMMEDIATELY.  
ignoring protocol 08 results in overwrite.
> rule -05
USE FULL SCREEN MODE (F11)
> rule -06
COMPLETE THE PROGRAM.  
`;

//logo icon events
logoIcon.addEventListener('click', handleLogoSelect);
logoIcon.addEventListener('dblclick', handleConsole);
function handleLogoSelect(event){select(event, logoIcon);}

//task bar events
taskBar.addEventListener('click', handleTaskBar);
function handleTaskBar(event){alert("ADMIN PERMISSIONS NEEDED");}

//hornet icon events
hornetIcon.addEventListener('click', handleHornetSelect);
function handleHornetSelect(event){select(event, hornetIcon);}
hornetIcon.addEventListener('dblclick', handleHornet);
function handleHornet(event){alert("Shaw !");}

//reference icon events
refIcon.addEventListener('click', handleRefSelect);
refIcon.addEventListener('dblclick', handleSugg);
function handleRefSelect(event){select(event, refIcon);}

document.body.addEventListener('click', () => deselect(allIcons)); 

// takes the 
function select(event, tag){
	tag.classList.add('selected');
	event.stopPropagation();
}

function deselect(tags){
	for(let i=0; i < tags.length; i++){
		tags[i].classList.remove('selected');
	}
}


const formTag = document.getElementById('form');
const sendBtn = document.getElementById('send');
const closeBtn = document.getElementById('close');
sendBtn.addEventListener('click', checkEmail);
closeBtn.addEventListener('click', () => formTag.style.display="none");

function checkEmail(event){
  const outputTag = document.getElementById('output');

  const emailInput = document.querySelector('input[name="email"]');
  const email = emailInput.value.split('@');

  const nameInput = document.querySelector('input[name="name"]');
  const textArea = document.querySelector('textarea');

  if(email[1] === "dawsoncollege.qc.ca"){
    outputTag.textContent = `Thank you ${nameInput.value} for suggesting ${textArea.value}`;
  } else{
    outputTag.textContent = "Suggestions from Dawsonites only!";
  }
}

function handleSugg(event){
  formTag.style.display = "block";
}

function handleConsole(event){
	document.body.style.cursor = 'wait';
	setTimeout(showConsole, 5000);
}

function showConsole(){
	consoleTag.style.display = "block";
	document.body.style.cursor = 'default';

	printLines(consoleTextTag, terminalText)
		.then(() => setTimeout(changeScreen, 1000));
}


async function printLines(tag, text){
	for(let i=0; i<text.length; i++){
		tag.textContent += text[i];
		tag.scrollTop = tag.scrollHeight;

		await new Promise(resolve => setTimeout(resolve, 50));
	}
}


function changeScreen(){
	screen1.style.display = 'none';
	screen2.style.display = 'flex';
	document.body.style.backgroundColor = "black";

	printText(instTag, inst)
		.then(() => instTag.insertAdjacentHTML("beforeend", `<a href="pages/intro.html" id="link"> >START GAME? </a>`));
}

async function printText(tag, text){
	for(let i=0; i<text.length;i++){
		tag.textContent += text[i];
		await new Promise(resolve => setTimeout(resolve, 20));
	}
}