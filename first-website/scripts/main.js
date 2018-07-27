

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Twisted_Fate.jpg') {
      myImage.setAttribute ('src','images/TwistedFate_2.jpg');
    } else {
      myImage.setAttribute ('src','images/Twisted_Fate.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my guide, ' + myName + '!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to my guide, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}
