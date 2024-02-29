function dupeCards (){
    let card = document.querySelector('.cardContainer');
    let cardGallary = document.getElementById('cardGallary');
    let newCard = card.cloneNode(true);
    newCard.style.display = 'flex'
    cardGallary.appendChild(newCard);
}
dupeCards()
dupeCards()
dupeCards()
dupeCards()
dupeCards()
dupeCards()
dupeCards()
