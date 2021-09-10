// activates javascript via html button
document.querySelector("#generate").addEventListener("click", writePassword);

// arrays for all the possible characters a random password can contain
var specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




function generatePassword() {
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
    var specialCharResponse = confirm("Click 'OK' to include special characters.");
    var numberResponse = confirm("Click 'OK' to include numbers.");
    var upperResponse = confirm("Click 'OK' to include uppercase letters.");
    var lowerResponse = confirm("Click 'OK' to include lowercase letters.");
    if (specialCharResponse === false && numberResponse === false && upperResponse === false && lowerResponse === false) {
      alert("You must choose at least one group of characters to include.")
    }
  }

  // making a new array combining my global arrays above
  var passwordCharacters = []
  if (specialCharResponse) {
    passwordCharacters = passwordCharacters.concat(specialChars);
  }

  if (numberResponse) {
    passwordCharacters = passwordCharacters.concat(numbers);
  }

  if (upperResponse) {
    passwordCharacters = passwordCharacters.concat(upperCaseLetters);
  }
  if (lowerResponse) {
    passwordCharacters = passwordCharacters.concat(lowerCaseLetters);
  }

  console.log(passwordCharacters);

  var randomPassword = ""

  // randomizes the array i made above and translates it into the random password based on character length request
  for (var i = 0; i < charLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword);
  }
  return randomPassword;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}