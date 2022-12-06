function getSaleItems(data){
    let shoppingCart = data.filter(candy => {
        return candy.type == "sweet";
    }).map(commodity => {
        return {
            item: commodity.item,
            price: commodity.price
        }
    })
    return shoppingCart;
};
