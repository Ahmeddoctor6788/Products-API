//selectors
const container = document.getElementById('products-container');


//API
fetch ('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
    container.innerHTML = '';
    data.products.forEach(product => {
        const imageUrl = product.images[0];
        container.innerHTML += `
        <div class="product-cart>
        <img src="${imageUrl}" alt="${product.title}">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">$${product.price}</p>
            <button class="btn-add">Add to cart</button>
        </div>`;
    });
})
.catch(error => console.error('made error', error));