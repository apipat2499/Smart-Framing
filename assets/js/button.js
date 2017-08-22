function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkButton(buttonID) {
  if (getCookie("button" + buttonID)=="on") {
    document.getElementById("on" + buttonID).className = "selected";
    document.getElementById("off" + buttonID).className = "";
  } else if (getCookie("button" + buttonID)=="off") {
    document.getElementById("on" + buttonID).className = "";
    document.getElementById("off" + buttonID).className = "selected";
  }
}

function on(buttonID) {
	document.cookie ="button"+buttonID+"=on";
  checkButton(buttonID);
}

function off(buttonID) {
	document.cookie ="button"+buttonID+"=off";
  checkButton(buttonID);
}

window.onload = function(){
	checkButton(1);
};