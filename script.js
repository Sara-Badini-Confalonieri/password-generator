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

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt(
    "Enter the length of your password (a number between 8 and 128):"
  );

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Invalid input. Password length must be a number between 8 and 128.');
    return null;
  }

  else {

    var uppercaseOptions = confirm('Do you want to include uppercase characters in your password?');
    var lowercaseOptions = confirm('Do you want to include lowercase characters in your password?');
    var numericOptions = confirm('Do you want to include numbers in your password?');
    var symbolsOptions = confirm('Do you want to include special characters in your password?');


    if (uppercaseOptions == false && lowercaseOptions == false && numericOptions == false && symbolsOptions == false) {
      alert('At least one option must be selected.');
      return null;
    }

  }

  return {
    passwordLength: passwordLength,
    uppercaseOptions: uppercaseOptions,
    lowercaseOptions: lowercaseOptions,
    numericOptions: numericOptions,
    symbolsOptions: symbolsOptions
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var optionsSelected = [];

  if (options.lowercaseOptions) {
    optionsSelected = optionsSelected.concat(lowerCasedCharacters);
  }

  if (options.uppercaseOptions) {
    optionsSelected = optionsSelected.concat(upperCasedCharacters);
  }

  if (options.numericOptions) {
    optionsSelected = optionsSelected.concat(numericCharacters);
  }

  if (options.symbolsOptions) {
    optionsSelected = optionsSelected.concat(specialCharacters);
  }

  var generatedPassword = '';
  for (var i = 0; i < options.passwordLength; i++) {
    var randomChar = getRandom(optionsSelected);
    generatedPassword += randomChar;
  }

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


//* Generate a password when the button is clicked
//  * Present a series of prompts for password criteria
//  * Length of password
//  * At least 8 characters but no more than 128.
//* Character types
//  * Lowercase
//  * Uppercase
//  * Numeric
//  * Special characters ($@%&*, etc//)
//  * Code should validate for each input and at least one character type should be selected
//  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page