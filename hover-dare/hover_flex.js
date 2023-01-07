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

const fancy = document.querySelector('.fancy');
const fancyLetters = document.querySelectorAll('.fancy .letter');

function applyRandomTransforms() {
  fancyLetters.forEach(letter => {
    const x = Math.floor(Math.random() * 160) - 80; // random value between -80 and 80
    const y = Math.floor(Math.random() * 160) - 80; // random value between -80 and 80
    const rotate = Math.floor(Math.random() * 30) - 15; // random value between -15 and 15

    letter.style.transform = `translate(${x}%, ${y}%) rotate(${rotate}deg)`;
  });
}

fancy.addEventListener('mouseenter', applyRandomTransforms);
fancy.addEventListener('mouseleave', () => {
  fancyLetters.forEach(letter => {
    letter.style.transform = `translate(0%, 0%) rotate(0deg)`;
  });
});
