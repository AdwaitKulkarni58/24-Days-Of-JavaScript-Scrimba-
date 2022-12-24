import products from "./data.js";

function sortProducts(data){
    let arr = data.sort((a, b) => { 
        return parseFloat(a.price) - parseFloat(b.price);
    });
    return arr;
}

const listByCheapest = sortProducts(products);

for (let {product, price} of listByCheapest) {
    console.log(`${product}, ${price}`);
}
