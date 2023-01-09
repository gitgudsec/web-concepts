const enhance = id => {
    const element = document.getElementById(id),
    text = element.innerText.split("");

    element.innerText = "";

    text.forEach(letter => {
        const span = document.createElement("span")

        span.className = "letter";

        span.innerText = letter;

        element.appendChild(span);
    });
}

enhance("channel-link");
const elements = document.querySelectorAll('.fancy');
elements.forEach(enhance);

const fancy = document.querySelectorAll('p.fancy, a.fancy');



fancy.forEach(element => {
  element.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('mouseenter', applyRandomTransforms);
    letter.addEventListener('mouseleave', () => {
      letter.style.transform = `translate(0%, 0%) rotate(0deg)`;
    });
  });
});

function applyRandomTransforms() {
  const x = Math.floor(Math.random() * 160) - 80; // random value between -80 and 80
  const y = Math.floor(Math.random() * 160) - 80; // random value between -80 and 80
  const rotate = Math.floor(Math.random() * 30) - 15; // random value between -15 and 15

  this.style.transform = `translate(${x}%, ${y}%) rotate(${rotate}deg)`;
}
