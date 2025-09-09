const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');

export const showProductContainer = (products) => {
    if (!products) {
        return false;
    }

    products.forEach((curProd) => {
        const { id, name, category, brand, price, image, stock, description } = curProd;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent = `$${price}`;
        productClone.querySelector(".productActualPrice").textContent = `$${(price * 1.1).toFixed(2)}`;
        productClone.querySelector(".productStock").textContent = stock;
        

        productContainer.append(productClone);
    });
}