const productsContent = document.querySelector(".productsContent");

async function getProducts() {
    const res =  await fetch("/products");
    const products = await res.json();
    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.textContent = product.name;
        productsContent.appendChild(div);
    }
    )
}

getProducts();