var out = "ctrl + shift + ",code = 69;

function init(){
	
	if(localStorage.hotkey){
		var data = localStorage.hotkey;
		default_value = data.substr(data.lastIndexOf('+')) + CharCode(data.substr(data.lastIndexOf('+') + 2));
	}else
		default_value = out + CharCode(code);
		
	hotkey.value = default_value;
}

function keyDown(e){
	out = "";
	if(e.ctrlKey) out += "ctrl + ";
	if(e.shiftKey) out += "shift + ";
	if(e.altKey) out += "alt + ";
	if(e.metaKey) out += "meta + ";

	code = e.keyCode;
	code = code == 16 ||code == 17 ||code == 18?null:code;
	e.target.value = out + CharCode(code);
	e.preventDefault();
	return false;
}

function saveAction() {
	var span = hotkey.nextSibling;
	if(!code){
		toggle(span," Press a key");
	}else if(out == ""){
		toggle(span," Press a Modifier key");
	}else{
		var local = out + code;
		console.log(local);
		localStorage.hotkey = local;
		toggle(this.nextSibling,"Hotkey Saved");
	}
}

function toggle(obj,text){
	obj.style.display = "inline";
	obj.innerText = text;
	setTimeout(function() { obj.style.display = "none" }, 1500);
}

function CharCode(code){
	return String.fromCharCode(code).toLowerCase();
}

document.addEventListener('DOMContentLoaded', function () {
	init();
	save.addEventListener('click', saveAction);
	hotkey.addEventListener("keydown", keyDown, false);
});