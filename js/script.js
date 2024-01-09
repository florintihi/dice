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
    const instance = basicLightbox.create(`
     <iframe src="https://www.youtube.com/embed/T0o8WiHy6L4?si=bZAzRdkwe2evt4K-" width="560" height="315" frameborder="0" autoplay></iframe>
`);

    instance.show();
  }

  if (dice[0] === 6 && dice[1] === 5) {
    wait.textContent = "Wait for it!🎲";
    rollButton.removeEventListener("click", handleClick);
    const instance = basicLightbox.create(`
      <iframe src="https://www.youtube.com/embed/3v13fH71lkk?si=4odh3JHatGrCDQYj" width="560" height="315" frameborder="0" autoplay></iframe>
`);
    instance.show();
  }
}

rollButton.addEventListener("click", handleClick);
