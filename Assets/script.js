// Assignment code here
// A prompt to ask the user how many characters in their password
var pwLength = Number(prompt("How many characters would you like in your password? Choose a number between 8 and 128"));
// Check the password length to ensure it is between 8 and 128 characters
  if(pwLength < 8 || pwLength >128) {
    pwLength = Number(prompt('You must choose a value larger than 7 and less than 129!')); 
  } else {
    pwLength;
  }
// Ask the user if they would like uppercase characters in their password
var upperCase = confirm("Would you like uppercase in your password?");
if (upperCase == true) {
  upperCase = ' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z ';
}else {
  upperCase = null;
}
// Ask the user if they would like lowercase characters in their password
var lowerCase = confirm("Would you like lowercase in your password?");
if (lowerCase == true) {
  lowerCase = ' a b c d e f g h i j k l m n o p q r s t u v w x y z ';
}else {
  lowerCase = null;
}
// Ask the user if they would like numbers in their password
var numbers = confirm("Would you like numbers in your password?");
if (numbers == true) {
  numbers = ' 0 1 2 3 4 5 6 7 8 9 '
}else {
  numbers = null;
}
// Ask the user if they would like special characters in their password
var special = confirm("Would you like special characters in your password?");
if (special == true) {
  special = " ! \" # $ % & ' ( )* + , - . / : ; < = > ? @ [ \] ^ _ ` { | } ~ "
}else {
  special = null;
}
// Declare generate password variable as a function to generate the password
var generatePw = generatePassword()
// Function to generate the password
function generatePassword() {
// Bring all selected characters under one variable
  var characters = [upperCase] + [lowerCase] + [numbers] + [special];
// Create another variable in order to turn the characters into an array for randomization
  var charMixed = characters.split(' ');
// For loop with Math.random to grab random characters for the password
  retVal = "";
  for (var i = 0; i < pwLength; i++) {
      retVal += charMixed[Math.ceil(Math.random() * charMixed.length)];  
  }
  return retVal;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePw;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
