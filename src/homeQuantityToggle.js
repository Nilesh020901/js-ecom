export const homeQuantityToggle = (e, id, stock) => {
    const currentCard = document.querySelector(`#card${id}`);
    const productQuantity = currentCard.querySelector('.productQuantity');

    let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1;

    if (e.target.className === 'cartIncrement') {
        if (quantity < stock) {
            quantity += 1;
        } else if (quantity === stock) {
            quantity = stock;
            alert('No more stock available');
        }
    }

    if (e.target.className === 'cartDecrement') {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    productQuantity.innerText = quantity;
    productQuantity.setAttribute('data-quantity', quantity);
    return quantity;
}