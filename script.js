const basketGoodsEl = document.querySelector('#basket-goods');
const basketTotalEl = document.querySelector('#basket-total');
const buttons = document.querySelectorAll('.menu-add-button');
let basketTotal = 0;
let basketGoods = 0;
const addAlert = (item) => (
    item.addEventListener('click', (event) => {
        basketTotal += +event.currentTarget.dataset.price
        basketTotalEl.textContent = basketTotal
        basketGoods += +event.currentTarget.dataset.goods
        basketGoodsEl.textContent = basketGoods
    }
        
    ) 
    
);
buttons.forEach(addAlert)

