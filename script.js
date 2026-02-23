//i hate javascript so much
const phrases = [
    "Check out my games!", "This text changes dynamically by the way.",
    "I wrote this text in a class.", "Hello World!"
];
//"Check out my YouTube page!",

const textElement = document.getElementById('randomText');

function RandomText(){
    var randomText = phrases[Math.floor(Math.random() * phrases.length)];
    textElement.textContent = randomText;   
}

RandomText()