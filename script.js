// Assignment code here
var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[","]", ",", "^", "_", "`", "{", "}", "|", "~",
 "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z",
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z"];

var numberLength = window.prompt("How many characters in your password?");



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(numberLength)
  
  var passwordText = document.querySelector("#password");
  passwordText.value = (password);
  

}


function generatePassword(passLength){
  var result = "";
  for(i=0; i<passLength; i++){
    var index = getRandomInt(characters.length);
   
    result += characters[index];
    
  
  }
  return result;
}

function getRandomInt(max){
  return Math.floor(Math.random()* Math.floor(max));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);