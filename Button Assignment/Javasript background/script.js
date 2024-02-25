const boxEnter = document.querySelector("box");

function random(number) 
{
  return Math.floor(Math.random() * (number + 1));
}
box.addEventListener("mouseenter", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;

  document.body.style.backgroundColor = rndCol;
 
});