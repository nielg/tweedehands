let cardExampels = document.getElementById('cardExampels');
let cardGallary = document.getElementById('cardGallery')

function dupeCards (onload){
    let cardArr = cardExampels.querySelectorAll('.cardContainer');
    if (onload === true){
        cardArr.forEach(element => {
            let newCard = element.cloneNode(true);
            newCard.style.display = 'flex'
            cardGallary.appendChild(newCard)
        });
    }else {
        let newCard = cardArr[Math.floor(Math.random() * cardArr.length)].cloneNode(true)
        newCard.style.display = 'flex'
        cardGallary.appendChild(newCard)
    }
};
dupeCards(true);

function searchBarFocus(element){
    let input = element.querySelector('input');
    input.focus();
    input.addEventListener('keydown', function(event){
        if (event.key === 'Enter'){
            search(input.value, 'none')
        }
    })
};


let oldElement = false;
function search (keyWord, element){
    if (oldElement !== false){
        oldElement.style.backgroundColor = 'white'
    }
    if (element !== 'none'){
        element.style.backgroundColor = '#9f9ea83a'
        oldElement = element
    }
    let activeCards = cardGallary.querySelectorAll('.cardContainer');
    activeCards.forEach(element => {
        if (keyWord === 'all'){
            element.style.display = 'flex'
        }else if (element.getAttribute('catagory').includes(keyWord)){
            element.style.display = 'flex'
        }else {
            element.style.display = 'none'
        }
    });
}
