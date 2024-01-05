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
  var characterLength = parseInt(prompt("How many characters would you like your password to have? (8-128)"));
  if (characterLength < 8 || characterLength > 128) {
    alert("Sorry, incorrect imput! Value must be a number between 8 and 128.");
    return;
  }
   // add -> 'if' statement for if they click 'ok' withouth putting anything in
   // or putting whitespace characters 
  if ( characterLength.trim().length === 0) {
    alert("Field empty! Please insert numerical value.");
  } else if (characterLength === null) {
    alert("Field null! Please insert numerical value.");
  }
  var characterTypeUpper = confirm("Would you like your password to include uppercase characters?");
  var characterTypeLower = confirm("Would you like your password to include lowercase characters?");
  var characterTypeNumber = confirm("Would you like your password to include numbers?");
  var characterTypeSpecial = confirm("would you like your password to include special characters? ($@%&*, etc)");
  return {
    length: characterLength,
    uppercase: characterTypeUpper,
    lowercase: characterTypeLower,
    number: characterTypeNumber,
    special: characterTypeSpecial,
  } 
}

// 02. Function for getting a random element from an array
function getRandom(arr) {

}
   // get random index from array
   // use index to get random elemnt and return it
   // combineine arrays?????

// 03. Function to generate password with user input
function generatePassword() {
  var userImput = getPasswordOptions()

  if ()

   // call function (can be done here or in writePassword function)
getPasswordOptions()
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




// NOTES & Internal Dilemmas:

// characterLength promt by default returns a string but we need a number
// so use 'parseInt()' -> takes a string and returns a number ()
// put whole promt inside ()


// DIFFERENCE betweent empty, null, & whitespace (strings):
// https://www.freecodecamp.org/news/check-if-string-is-empty-or-null-javascript/
// empty = if string length is 0 
// (an empty string is a valid string object so all string operations are available on this item)
// check !! -> if (typeof characterLength === "string" && characterLength.length === 0)

// null = the absence of any value 
// implies that it doesn’t refer to any object or value in the memory. By default, Java initializes reference variables 
// with null values and primitives with default values -> cannot assign null to primitives.

// whitespace = whitespace characters that make it appear non-empty even when it is.
// '.trim()' to remove any leading or trailing whitespace characters before checking for emptiness


// 'return' statemnet CONFUSION passing along user imput from 01 -> 03:
// 1. I don't need to save the user imput return object in a variable (e.g userImput) 
// 2. If I did I wouldn't be able to use it in 03 anyaway (bc that variable is local to that function only)
// 3. So, you just create the variable 'userImput' in 03 and call the 01 function inside of that 
// SO -> var userImput = getPasswordOptions() 


// Where to CALL for password to do its thing:
// might not be the best option to call the function in writePassword (05) 
// but rather to call it in generatePassword (03) function instead 