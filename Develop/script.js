// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(charset, length) {
// Parameters for password length
  var length = responseOne;
  var responseOne = prompt("How many characters would you like your password to include? (Min = 8, Max = 128)");

  if (responseOne < 8 || responseOne > 128) {
    alert("Your password must contain between 8 and 128 characters.");
  } 
}
// User decisions on what criteria to include
  var responseTwo = confirm("Would you like to use lowercase characters?");
    if (responseTwo === true) {
      array[0] = lowercase;
    } else if (responseTwo === false) {
      array[0] = "";
    }
  var responseThree = confirm("Would you like to use uppercase characters?");
    if (responseThree === true) {
      array[1] = uppercase;
    } else if (responseThree === false) {
      array[1] = "";
    }
  var responseFour = confirm("Would you like to use numerical characters?");
    if (responseFour === true) {
      array[2] = number;
    } else if (responseFour === false) {
      array[2] = "";
    }
  var responseFive = confirm("Would you like to use special characters?");
    if (responseFive === true) {
      array[3] = symbol;
    } else if (responseFive === false) {
      array[3] = "";
    }

// Password criteria options
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "0123456789";
    var symbol = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    var arrayEmpty = [];  
    var array = [lowercase, uppercase, number, symbol];
    
    var charset = (ar[0] + ar[1] + ar[2] + ar[3]);

      var result = "";
      for (var i = 0; i < length; i++)
        result += charset[randomInt(charset.length)];
      return result;

//       var array = []; //<-- initialization here
//       for(var i = 1; i<10;i++) {
//     array[i]= Math.floor(Math.random() * 7);
// }
// console.log(array);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




