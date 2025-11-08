"use strict";
// events for logoIcon
const logoIcon = document.querySelector("#logoIcon");
logoIcon.addEventListener('click', (e) => select(e, logoIcon));
logoIcon.addEventListener('dblclick', waitShowConsole);

const consoleTag = document.querySelector('#console');

//event for task bar
const taskBar = document.querySelector('#taskBar');
taskBar.addEventListener('click', () => alert("ADMIN PERMISSIONS NEEDED"));

//events for hornetIcon
const hornetIcon = document.querySelector('#hornetIcon');
hornetIcon.addEventListener('click', (e) => select(e, hornetIcon));
hornetIcon.addEventListener('dblclick', () => alert("SHAW !"));

//events for refIcon
const refIcon = document.querySelector('#refIcon');
refIcon.addEventListener('click', (e) => select(e, refIcon));
refIcon.addEventListener('dblclick', () => alert("Made by Illia Yevseienkov and Xyrille Magno"));

//deselect event for all icons
const allIcons = [logoIcon, hornetIcon, refIcon];
const body = document.querySelector('body');
body.addEventListener('click', () => deselect(allIcons)); 

/*
Terminal text to print on the screen
*/
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
WARNING FLASHING LIGHTS AND SENSETIVE CONTENT
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

/*
Functions select and deselect add and remove the .selected class
repectively to mimic the windows desktop. Called using an event
listener on the #logoIcon and body elements.
*/
function select(event, tag){
	tag.classList.add('selected');
	event.stopPropagation(); //stop deselect event
}

function deselect(tags){
	for(let i=0; i < tags.length; i++){
		tags[i].classList.remove('selected');
	}
}


/*
Triggers on a double click on the #logoIcon, changes the cursor
and uses setTimeout to wait before further execution.
*/
function waitShowConsole(event){
	body.style.cursor = 'wait'; //change cursor
	
	//wait for 5 seconds
	setTimeout(showConsole, 5000);
}

/*
Called by setTimeout in waitShowConsole function, changes the cursor
back to default, shows the hidden consoleTag element and calls printText
*/
function showConsole(){
	consoleTag.style.display = "block";
	body.style.cursor = 'default';
	// printText(consoleTextTag, terminalText);
	printLines(consoleTextTag, terminalText);
}


/*
Takes in an html tag (object) where the text is shown and the text to show (Array of Strings)
Uses a recursive loop that itirates through each string in the array and adds it to the textContent 
of the element, calls itself with a setTimeout to mimic a typing animation.
*/
let k = 0;
function printLines(tag, text){
	if (k < text.length){
		tag.textContent += text[k];
		scrollDown(tag);
		k++;

		setTimeout(() => printLines(tag, text), 70); //recursive call
	} else{
		setTimeout(() => changeScreen(), 1000); //change to screen2 after the dot animation
	}
}

/*
Scrolls down when the element has text in overflow
by setting the current position to the total overflow height.
*/
function scrollDown(tag){
	tag.scrollTop = tag.scrollHeight;
}


/*
Takes in an html tag (object) where the text is shown and the text to show (String)
Uses a recursive loop that itirates through each character in the String and 
adds it to the textContent of the element, calls itself with a setTimeout to
mimic a typing animation.
*/

/*

*/
function changeScreen(){
	screen1.style.display = 'none';
	screen2.style.display = 'block';

	printText(instTag, inst);
}

// printText(instTag, inst);
let i = 0;
function printText(tag, text){
	if(i < text.length){
		tag.textContent += text[i];
		i++;
		setTimeout(() => printText(tag, text), 80); //recursive call with timeout
	}
	//add text with a link at the end 
	else{
		//create a tag and set the attributes (href) and content (text)
		const playLink = document.createElement('a');
		playLink.href = 'pages/intro.html';
		playLink.textContent = '>START GAME?'

		tag.appendChild(playLink);
	}
}
