// Assignment code here
var charSpecialYes = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[","]", ",", "^", "_", "`", "{", "}", "|", "~"];
var charLowerYes = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
var charUpperYes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z"];
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var numberLength;
var Master;
var passwordCriteria = function(){

numberLength = window.prompt("How many characters in your password?");

if (numberLength <= 7 || numberLength >= 129) {

return window.alert("Invalid, Password must be atleast 8 Characters, At most 128")
}

Master = [];

var charSpecReq = window.confirm("Would you like to include Special Characters?");
  if (charSpecReq === true){
    Master = Master.concat(charSpecialYes)
  }

var charLowerReq = window.confirm("Would you like to include Lowercase Characters?");
  if (charLowerReq === true){
    Master = Master.concat(charLowerYes)
  }


var charUpperReq = window.confirm("Would you like to include Uppercase Characters?");
  if (charUpperReq === true){
    Master = Master.concat(charUpperYes)
  }

var NumbersReq = window.confirm("Would you like to include Numbers Characters?");
  if (NumbersReq === true){
    Master = Master.concat(Numbers)
  }

  if (Master.length === 0) {
window.alert("Invalid, Password must contain atleast 1 character type")
  }
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  passwordCriteria();
  if (numberLength <= 7 || numberLength >= 129 || Master.length === 0){
    return 0;
  }
  var password = generatePassword(numberLength)
  
  var passwordText = document.querySelector("#password");
  passwordText.value = (password);
}



function generatePassword(passLength){
  var result = "";
  for(i=0; i<passLength; i++){
    var index = getRandomInt(Master.length);
   
    result += Master[index];
    
  
  }
  return result;
}

function getRandomInt(max){
  return Math.floor(Math.random()*max);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);