const diceInput = document.getElementById("numOfDice");
const rollButton = document.getElementById("button");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");
const wait = document.querySelector(".wait");
const images = [];
const dice = [];

function handleClick() {
  dice.length = 0;
  images.length = 0;
  for (let i = 0; i < diceInput.value; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    dice.push(value);
    images.push(`<img src="images/${value}.png" alt="Dice ${value}">`);
  }

  diceResult.textContent = `Dice rolled: ${dice.join(", ")}`;
  diceImages.innerHTML = images.join(" ");

  if (dice[0] === 6 && dice[1] === 6) {
    wait.textContent = "Wait for it!😉";
    rollButton.removeEventListener("click", handleClick);
    setTimeout(function redirect() {
      location.replace("https://www.youtube.com/watch?v=YVDKnQLz0bk");
    }, 2000);
  }

  if (dice[0] === 6 && dice[1] === 5) {
    wait.textContent = "Wait for it!🎲";
    rollButton.removeEventListener("click", handleClick);
    setTimeout(function redirect() {
      location.replace("https://www.youtube.com/watch?v=3v13fH71lkk");
    }, 2000);
  }
}

rollButton.addEventListener("click", handleClick);
