const diceInput = document.getElementById("numOfDice");
const rollButton = document.getElementById("button");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");
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
  return;
}

rollButton.addEventListener("click", handleClick);
