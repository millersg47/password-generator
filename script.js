// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

function generatePassword () {

  var criteriaU = confirm("Do you want to include uppercase letters?");
  var criteriaL = confirm("Do you want to include lowercase letters?");
  var criteriaN = confirm("Do you want to include numbers?");
  var criteriaS = confirm("Do you want to include special characters?");
  var characterCount = prompt("How many characters would you like the password to include?");

  var password = "";

  if (criteriaU && criteriaL && criteriaN && criteriaS) {
    password = [uppercaseLetters, lowercaseLetters, numbers, specialCharacters];
  } else if (criteriaU && criteriaN && criteriaS) {
    password = [uppercaseLetters, numbers, specialCharacters];
  }


  // for (var i = 0; i <= characterCount; i++) {
  //   var randomNumber = Math.floor(Math.random() * chars.length);
  //   password += chars.substring(randomNumber, randomNumber +1);
  //  }
}