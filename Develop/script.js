// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = prompt("How many characters long?");
    if ( length < 8 || length > 128 ) {
      alert("Password must be between 8 and 128 characters long, refresh the page and start over.");
      return "try again";
    } else {
      alert("Password length set to " + length);
    }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
