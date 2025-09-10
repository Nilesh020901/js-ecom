import { getCardProductFromLS } from "./getCardProductFromLS";
import { updateCartValue } from "./updateCartValue";

getCardProductFromLS();

export const addToCart = (e, id, stock) => {

    let arrLocalStorage = getCardProductFromLS();
    const currentProdElem = document.querySelector(`#card${id}`);
    let quantity = currentProdElem.querySelector('.productQuantity').innerText;
    let price = currentProdElem.querySelector('.productPrice').innerText;

    // console.log('Adding to cart:', { id, quantity, price });
    price = price.replace('$', '');

    let existingProd = arrLocalStorage.find(curProd => curProd.id === id);

    console.log('Existing product in cart:', existingProd);

    if (existingProd) {
        return false;
    };
    quantity = parseInt(quantity);
    price = Number(price * quantity).toFixed(2);

    arrLocalStorage.push({ id, quantity, price });
    localStorage.setItem('cartProductsLS', JSON.stringify(arrLocalStorage));

    alert('Product added to cart successfully!');

    updateCartValue(arrLocalStorage);
}