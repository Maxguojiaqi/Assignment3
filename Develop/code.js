// Assignment Code
let generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  function generatePassword(){
    let passWord="";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let numeric = "1234567890";
    let specialChar = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'
    let typeRequested = [];
    var typeIncluded = [];
    //get the length of password, will keep asking until get a number between 8-128
    let pswLength;
    do {
      pswLength = prompt("Please enter a number between 8 and 128 \n How many characters would you like to have?");
    } while (pswLength < 8 || pswLength >128); //repeat if it is lower than 8 or more than 128
    // get the types of characters to be included
    confirm("Would you like to include uppercase letters") ? typeRequested.push(upperCase):"";
    confirm("Would you like to include lowercase letters") ? typeRequested.push(lowerCase):"";
    confirm("Would you like to include numbers") ? typeRequested.push(numeric):"";
    confirm("Would you like to include special characters") ? typeRequested.push(specialChar):"";
    function generator() {
      //reset the password and type included if the previous run is not a success
      passWord="";
      typeIncluded = [];
      //generate password using for loop
      for (let i=1; i<=pswLength;i++) {
        //randomly choose a type from requested, and mark as included
        randomType = typeRequested[Math.floor(Math.random() * typeRequested.length)];
        typeIncluded.includes(randomType) ? "":typeIncluded.push(randomType)
        //randomly choose password from the type above
        passWord += randomType[Math.floor(Math.random()* randomType.length)]
      }
      return (passWord)
    }
    // run the generator till all the types are included in the password
    while (typeIncluded.length != typeRequested.length) {
      generator();
    }
    return (passWord)
  }
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);