const heart = document.querySelector('.heartImg')

function likeOnHeart (element, e){
    let cardContainer = element.closest('.cardContainer')
    let likeCounterPara = cardContainer.querySelector('.cardLikeCounter');
    let src = element.getAttribute('src');
    console.log(element)
    if (src === 'img/redHeart.svg'){
        likeCounterPara.innerHTML = likeCounterPara.innerHTML - 1;
        element.src = 'img/emptyHeart.svg';
    }else if (src === 'img/emptyHeart.svg'){
        like(cardContainer, e);
    };
};

function like (element, e) {
    let likeCounterPara = element.querySelector('.cardLikeCounter');
    let likeCounterHeart = element.querySelector('.cardHeartLikeCounter');
    let likeCounter = parseInt(likeCounterPara.innerHTML) + 1;

    let heartDupe = heart.cloneNode(true); 
    document.body.appendChild(heartDupe);

    heartDupe.style.left = (e.pageX - heartDupe.clientWidth / 2) + 'px';
    heartDupe.style.top = (e.pageY - heartDupe.clientHeight / 2) + 'px';

    heartDupe.classList.add('active')
    setTimeout(() => {
        heartDupe.remove()
    }, 1000);

    likeCounterPara.innerHTML = likeCounter
    likeCounterHeart.setAttribute('src', 'img/redHeart.svg')
};


function showMore(element){
    let cardContainer = element.closest('.cardContainer')
    let cardFooter = cardContainer.querySelector('.cardFooter')
    let descriptionContainer = cardContainer.querySelector('.cardBottomContentDescription');

    if (element.innerHTML === 'show more ...'){
        cardFooter.style.display = 'none'
        element.innerHTML = 'show less ... '
        descriptionContainer.style.height = 'auto'

    }else if (element.innerHTML = 'show less ... '){
        cardFooter.style.display = 'flex'
        element.innerHTML = 'show more ...'
        descriptionContainer.style.height = '75px'
    }
}

let addToBasketFutureInnerHTML = 'Take Out Basket';
function addToBasket (element){
    let imgDiv = element.querySelector('.addToBasketImgDiv');
    let img = imgDiv.querySelector('img');
    imgDiv.style.backgroundColor = '#09b59b'
    imgDiv.style.paddingLeft = '170px'
    element.style.backgroundColor  = '#09b59b';
    setTimeout(() => {
        let p = element.querySelector('p');
        p.innerHTML = addToBasketFutureInnerHTML
        imgDiv.style.paddingLeft = '0';
        imgDiv.style.backgroundColor = '';
        element.style.backgroundColor = '';

        if (addToBasketFutureInnerHTML === 'Take Out Basket'){
            addToBasketFutureInnerHTML = 'Add To Basket';
            img.classList.remove('tiltTrue')
            img.src = 'img/cross.svg';
        }else if (addToBasketFutureInnerHTML === 'Add To Basket'){
            addToBasketFutureInnerHTML = 'Take Out Basket'
            img.src = 'img/addToShoppingCart.svg';
            setTimeout(() => {
                img.classList.add('tiltTrue')
            }, 1000);
        }
    }, 1000);
}