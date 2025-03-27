let currentCard = 0;
const cards = document.querySelectorAll(".card");

function nextCard() {
    cards[currentCard].classList.remove("active");
    currentCard = (currentCard + 1) % cards.length;
    cards[currentCard].classList.add("active");
}
