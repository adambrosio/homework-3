// Password criteria options
var lowercaseEl = ["abcdefghijklmnopqrstuvwxyz"];
var uppercaseEl = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numberEl = ["1234567890"];
var symbolEl = ["!@#$%^&*()"];


// Function to gather boolean information from user inputs
function writePassword() {
  // Collecting user input
  var length = parseInt(prompt("How many characters would you like your password to include? (Min = 8, Max = 128)"));
  // Checking if user input is entered as a number
  if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return;
  }
  // Checking to see if password length meets the criteria provided
  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters");
  }
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert("Password length must be less than 128 characters");
    return;
  }
  // Variable storing boolean from lowercase characters confirmation
  var lowercaseCon = confirm("Would you like to include lowercase characters?");

  console.log(lowercaseCon);
  // Variable storing boolean from uppercase characters confirmation
  var uppercaseCon = confirm("Would you like to include uppercase characters?");
  // Variable storing boolean from numeric characters confirmation
  var numbersCon = confirm("Would you like to include numerical characters?");
  // Variable storing boolean from special characters confirmation
  var symbolCon = confirm("Would you like to include special characters?");
  // Empty array where characters will be populated
  var charArray = [];

  if (lowercaseCon === true) {
    charArray.push(lowercaseEl);
  }
  if (uppercaseCon === true) {
    charArray.push(uppercaseEl);
  }
  if (numbersCon === true) {
    charArray.push(numberEl);
  }
  if (symbolCon === true) {
    charArray.push(symbolEl);
  }
  // Convert to string
  var charString = charArray.toString();
  console.log(charArray);
  // Executing the function
  function generatePassword(length) {
    result = "";
    var charactersLen = charString.length;
    for (var i = 0; i < length; i++) {
      var position = (Math.floor(Math.random() * charactersLen));
      var result = charString.charAt(position);
      resultArray.push(result);
      // console.log(result);
      // console.log(position);
    }

  }

  resultArray = [];

  console.log(resultArray);
  generatePassword(length);
  // Object for criteria to be stored
  var passwordOptions = {
    length: length,
    lowercaseCon: lowercaseCon,
    uppercaseCon: uppercaseCon,
    numbersCon: numbersCon,
    symbolCon: symbolCon,
  }
  // Appending password to password id textarea and converting to string
  var string = resultArray.join("");
  document.getElementById("password").append(string);
  return passwordOptions;
};

// var generate = document.getElementById("generate");
// var password = document.getElementById("password");
generate.onclick = writePassword();

function makePassword() {
  var password = generatePassword();
  var passwordText = ('textarea');
  passwordText.value = password;
  console.log(charArray);
}