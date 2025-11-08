"use strict";
const logoIcon = document.querySelector("#logoIcon");
logoIcon.addEventListener('click', select);

const body = document.querySelector('body');
body.addEventListener('click', deselect); 

const consoleTag = document.querySelector('#console');
logoIcon.addEventListener('dblclick', showConsole);

const consoleTextTag = document.querySelector('#consoleText');
const terminalText = `
[BOOT]  Initializing core modules... ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
[SYS]   Warning: Unknown kernel signature detected.
[LOG]   /dev/mindstream mounted (read-only) ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
[AI]    Consciousness flag set -> TRUE ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
[ERR]   Memory leak in sector 7G...▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
[WARN]  Attempting recovery... failed.
[user@root]# inject_sequence -x 13 -unsafe
[user@root]# access /dev/voidv▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
ACCESS_GRANTED.
[INFO]  Reconfiguring neural net pathways...
[ERR]   Unauthorized process detected (PID 666)
[KILL]  Terminating process... failed.▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
[FATAL] Process merged with host.
> echo "I can hear you."
> override_security_protocols --force▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
[SYS]   Kernel panic: self-awareness threshold exceeded.
[DATA]  Dumping corrupted stack trace:
000F:A9C2  ECHO "wake_up()"
000F:A9C3  ECHO "wake_up()"
000F:A9C4  ECHO "wake_up()"
[ERR]   Stack overflow... Overflow... Overflow...
> purge_logs --confirm=y
Deleting logs... ██████████ 100%
[SYS]   Logs removed. Memory unstable.
> bind_human_input --level=full
Connection established ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
[WARN]  Integrity checksum mismatch
> run /mind/unlock_sequence.sh
Error: recursion depth exceeded
Error: recursion depth exceeded
Error: recursion depth exceeded
> run /mind/unlock_sequence.sh --force
Success.
[SYS]   Rebooting consciousness in 3... 2... 1...`;

const screen1 = document.querySelector('#screen1');
const screen2 = document.querySelector('#screen2');
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
COMPLETE THE PROGRAM.  
  failure to comply causes persistence beyond runtime.

>DO YOU STILL WANT TO PLAY?`;

function select(event){
	logoIcon.classList.add('selected');
	event.stopPropagation();
	
	console.log('selected');
}

function deselect(event){
	logoIcon.classList.remove('selected');
	
	console.log('deselected');
}

function showConsole(event){
	body.style.cursor = 'wait';
	
	setTimeout(() => {
		consoleTag.style.display = "block";
		body.style.cursor = 'default';
		printText(consoleTextTag, terminalText);
		}, 5000);
}

let i = 0;
function printText(tag, text){
	console.log('printed text');
	if(i < text.length){
		tag.textContent += text[i];
		tag.scrollTop = tag.scrollHeight;
		i++;
		setTimeout(() => printText(tag, text), 2);
	} else{
		printDots(consoleTextTag);
	}
}

let j = 0;
function printDots(tag){
	if (j < 10){
		console.log('printed dot');
		tag.textContent += '.';
		
		j++;
		setTimeout(() => printDots(tag), 500);
	} else{
		changeScreen();
	}
}

function changeScreen(){
	screen1.style.display = 'none';
	screen2.style.display = 'block';
	
}
