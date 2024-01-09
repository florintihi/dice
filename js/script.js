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
  if (diceInput.value === "" || diceInput.value < 1) {
    diceResult.textContent =
      "Enter in the input above how many dice you want to roll!";
    return;
  }
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
    const instance = basicLightbox.create(`
     <iframe src="https://www.youtube.com/embed/T0o8WiHy6L4?autoplay=1" width="560" height="315" frameborder="0" allow="autoplay"></iframe>
`);

    setTimeout(() => {
      instance.show();
    }, 1000);
  }

  if (dice[0] === 6 && dice[1] === 5) {
    wait.textContent = "Wait for it!🎲";
    rollButton.removeEventListener("click", handleClick);
    const instance = basicLightbox.create(`
      <iframe src="https://www.youtube.com/embed/3v13fH71lkk?autoplay=1" width="560" height="315" frameborder="0" allow="autoplay"></iframe>
`);
    setTimeout(() => {
      instance.show();
    }, 1000);
  }
}

rollButton.addEventListener("click", handleClick);
