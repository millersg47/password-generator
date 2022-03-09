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

//creating arrays for each character type that the user can choose to include// 
const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

//overarching function to create pw//
var generatePassword = function() {

  // prompt to collect user preference for character count and return function if invalid value is entered//
  var characterCount = prompt("How many characters would you like the password to include?");
  characterCount =   parseInt(characterCount);
  // guard clause to stop program as soon as user submits a number below 8 or above 128//
  if (characterCount<8 || characterCount>128) {
    return;
  };
  if (Number.isNaN(characterCount)) {
    return "Must submit numerical value";
  };

  //confirms to ask user which character types they want to include//
  var criteriaU = confirm("Do you want to include uppercase letters?");
  console.log(criteriaU);
  var criteriaL = confirm("Do you want to include lowercase letters?");
  console.log(criteriaL);
  var criteriaN = confirm("Do you want to include numbers?");
  console.log(criteriaN);
  var criteriaS = confirm("Do you want to include special characters?");
  console.log(criteriaS);

    // declares selections variable to store the user preferences as an array to pull from starting with all types included//
  var selections =[];
      // declares password variable as a string to hold the randomly selected characters when pulled from selections array//
  var password ="";

    //if statements to add the different character types to the selection array, or leave them out depending on user preferences//
    if(criteriaU && password != characterCount){
      selections = selections.concat(uppercaseLetters);
      var upperRequired = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
      password += upperRequired;
    };
    if(criteriaL && password != characterCount){
      selections = selections.concat(lowercaseLetters);
      var lowerRequired = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
      password += lowerRequired;
    };
    if(criteriaN && password != characterCount){
      selections = selections.concat(numbers);
      var numberRequired = numbers[Math.floor(Math.random() * numbers.length)];
      password += numberRequired;
    };
    if(criteriaS && password != characterCount){
      selections = selections.concat(specialCharacters);
      var specialRequired = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
      password += specialRequired;
    };
    if(!criteriaU && !criteriaL && !criteriaN && !criteriaS) {
      return "Must select at least one character type!";
    }
    console.log(selections);
      //for loop to collect user preferences into selections array and then pull from them to create password string//
    for (var i = 0; i < characterCount; i++) {
    // selecting random values from the selections array based on which arrays above are included in selections//
      var index = selections[Math.floor(Math.random() * selections.length)];
    password += index;
    console.log(password);
  };

  return password;

};

