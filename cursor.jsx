const cursorDot = document.getElementById("cursor-dot")
const cursorOutline = document.getElementById("cursor-outline")
console.log(cursorDot)

cursorOutline.style.color = 'blue';

window.addEventListener("mousemove", function (e) {

  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.style.left = `${posX}px`;
  cursorOutline.style.top = `${posY}px`;

})