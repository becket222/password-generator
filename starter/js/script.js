// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// 01. Function to prompt user for password options
function getPasswordOptions() {
  // passwordLength promt by default returns a string but we need a number
  // so use 'parseInt()' -> takes a string and returns a number
  var passwordLength = parseInt(prompt("How many characters would you like your password to have? (8-128)"));

  // If they enter number that is not between 8 - 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Sorry, incorrect input! Value must be a number between 8 and 128.");
    return null;
  }

  // If they click 'ok' withouth putting anything in
  // or putting whitespace characters (if you console.log you get 'NaN' not 'null')
  if (Number.isNaN (passwordLength)) {
    alert("Please enter a numerical value.")
    return null;
  }

  // Character types
  var characterTypeUpper = confirm("Would you like your password to include uppercase characters?");
  var characterTypeLower = confirm("Would you like your password to include lowercase characters?");
  var characterTypeNumber = confirm("Would you like your password to include numbers?");
  var characterTypeSpecial = confirm("would you like your password to include special characters? ($@%&*, etc)");

  // If they don't select anything 
  if (
    characterTypeUpper === false &&
    characterTypeLower === false &&
    characterTypeNumber === false &&
    characterTypeSpecial === false 
    ) {
      alert("Please select at least one character type.");
      return null;
  } 

  // Save options in a variable 
   var userInputOptions =  {
    length: passwordLength,
    uppercase: characterTypeUpper,
    lowercase: characterTypeLower,
    number: characterTypeNumber,
    special: characterTypeSpecial,
  }

  return userInputOptions;
}

// 02. Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];

  return randomElement;
}
  
// 03. Function to generate password with user input
function generatePassword() {
  // Call for password options so we get user input
  var userInput = getPasswordOptions();
  // Push random characters in new array
  var newPasswordArray = [];
  var result = [];

  if (userInput.uppercase) {
    newPasswordArray.push(getRandom(upperCasedCharacters));
  } 

  if (userInput.lowercase) {
    newPasswordArray.push(getRandom(lowerCasedCharacters));
  }

  if (userInput.number) {
    newPasswordArray.push(getRandom(numericCharacters));
  }

  if (userInput.special) {
    newPasswordArray.push(getRandom(specialCharacters));
  }

  for ( var i = 0; i < userInput.length; i++) {
    var randomCharacter = getRandom(newPasswordArray);
    result.push(randomCharacter);
  }

  return result.join("");
}

// 04. Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// 05. Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// 06. Add event listener to generate button
generateBtn.addEventListener('click', writePassword);