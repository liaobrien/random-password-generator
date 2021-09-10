// activates javascript via html button
document.querySelector("#generate").addEventListener("click", writePassword);

// arrays for all the possible characters a random password can contain
var specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




function generatePassword() {
  // var myPassword
  // return password;
  charLength = prompt("How many characters would you like your password to be? Put a number between 8 and 128.");
  if (!charLength) {
    alert("Prompt cannot be left blank.")
    return generatePassword();
  }
  else if (8 > charLength > 128) {
    alert("Value not within valid range.")
    return generatePassword();
  }
  else if (8 < charLength < 128) {
    var specialCharResponse = confirm("Click 'Ok' to include special characters.");
    var numberResponse = confirm("Click 'Ok' to include numbers.");
    var upperResponse = confirm("Click 'Ok' to include uppercase letters.");
    var lowerResponse = confirm("Click 'Ok' to include lowercase letters.");
    if (specialCharResponse === false && numberResponse === false && upperResponse === false && lowerResponse === false) {
      alert("You must choose at least one type of characters to include.")
    }
  }


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// onclick of some kind, prompt("")

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// confirm("") to say yes or no criteria

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page