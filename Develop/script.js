// Assignment Code


let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Function will generate the password based on user requirement
function generatePassword() {
    // Define all the variables will be used
    let userPickedLength;
    let ifUppercase;
    let ifLowercase;
    let ifNumeric;
    let ifSpecialChar;
    let randomGeneratedPassword = '';

    // prompt user to get the user desired password length
    userPickedLength = prompt("Please choose a password length in number(non-interger value will be rounded), range from 8 to 128 characters: ");
    // Make sure the user give a valid input
    if (isNaN(userPickedLength) || userPickedLength > 128 || userPickedLength<8)
    {
      alert("Please input a valid number!");
    }
    // If input is valid, proceed.. 
    else
    {
      // round the input password value to make sure it becomes an integer.
      userPickedLength = Math.floor(userPickedLength);

      // check which criteria user would like the password to meet.
      ifUppercase = confirm("Do you want to use Upper Case?");
      ifLowercase = confirm("Do you want to use Lower Case?");
      ifNumeric = confirm("Do you want to use Numeric?");
      ifSpecialChar = confirm("Do you want to use Special Character?");
      
      // create the string that contains all possible value for the criterias
      let upCharList = 'ABCDEFGHIJKLMNOPQRSTUVWXTZ';
      let lowCharList = 'abcdefghiklmnopqrstuvwxyz';
      let numList = '0123456789';
      let SpecialCharList = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

      // create a array that will hold the criteria string based on user requirements
      let userPickedTypes = [];
      let metTypes =[];
      let atLeastOneCriteriaMet = false;

      if(ifUppercase)
      {
        userPickedTypes.push(upCharList);
        atLeastOneCriteriaMet = true;
      }
      if(ifLowercase)
      {
        userPickedTypes.push(lowCharList);
        atLeastOneCriteriaMet = true;
      }
      if(ifNumeric)
      {
        userPickedTypes.push(numList);
        atLeastOneCriteriaMet = true;
      }
      if(ifSpecialChar)
      {
        userPickedTypes.push(SpecialCharList);
        atLeastOneCriteriaMet = true;
      }
      if(!atLeastOneCriteriaMet)
      {
        alert("Please pick at least one password criteria!")
      }

      // create a passwords based on all conditions.
      for (let i=0; i < userPickedLength; i++) {

        let currentTypes = userPickedTypes;
        // when not all criterias met, pick only from the unmet criterias
        let typesDifference = userPickedTypes.filter(d => !metTypes.includes(d));

        if(typesDifference.length!=0)
        {
          currentTypes = typesDifference;
        }
        // pick a random index based on the string length
        let randomIndex = Math.floor(Math.random() * currentTypes.length);
        let rondamPickedType = currentTypes[randomIndex];
        let currentRandomChar = pickRandomChar(rondamPickedType);
        randomGeneratedPassword+=currentRandomChar;
        // add this used type to the metType array
        metTypes.push(rondamPickedType);
      }
    }
    return randomGeneratedPassword;

}

// Randomly create passwords character based on the input string
function pickRandomChar(charList)
{
  let randomChar;
  let randomIndex = Math.floor(Math.random() * charList.length);
  randomChar = charList.substring(randomIndex,randomIndex+1);

  return randomChar;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
