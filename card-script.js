const basketGoodsEl = document.querySelector('#basket-goods')
const basketTotalEl = document.querySelector('#basket-total');
const button = document.querySelector('.menu-add-button');
console.log(button)
let basketTotal = 0
let basketGoods = 0
const addPrice = (elem) => (
    elem.addEventListener('click', (event) => {
        basketTotal += +event.currentTarget.dataset.price;
        basketTotalEl.textContent = basketTotal;
        basketGoods += +event.currentTarget.dataset.goods;
        basketGoodsEl.textContent = basketGoods

    })
)


addPrice(button)