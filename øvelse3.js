/* ØVELSE 3 */

function generateRandomNumber() {
    return Math.floor(Math.random() * 11);
  }
  
  let randomNumber = generateRandomNumber();
  console.log(randomNumber);
  
  const checkButton = document.getElementById("check_button");
  checkButton.addEventListener("click", checkGuess);
  
  function checkGuess() {
    const guessInput = document.getElementById("tal");
    const guessNumber = parseInt(guessInput.value);
  
    if (isNaN(guessNumber) || guessNumber < 0 || guessNumber > 10) {
      alert("Please enter a valid number between 0 and 10.");
      return;
    }
  
    if (guessNumber === randomNumber) {
      alert("JUBII! Tallet var " + randomNumber + ", du må være synsk!");
    } else if (guessNumber < randomNumber) {
      alert("For lavt! Prøv igen!");
    } else if (guessNumber > randomNumber) {
      alert("For højt! Prøv igen!");
    }
  }