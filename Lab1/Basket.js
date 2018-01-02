var products = [{
    name: "test",
    price: 12.9,
    inventory: 20
}, {
    name: "test2",
    price: 30,
    inventory: 80
}];

class ProductLineItem {

    constructor(product) {
        this.product = product;
        this.quantity = 1;
    }

    get price() {
        return this.product.price;
    }

    get totalPrice() {
        return this.product.price * this.quantity;
    }
}


var basket = (function () {
    let myBasket = [];
    return {

        addProduct: function (productID) {
            let prod = new ProductLineItem(products[productID]);
            return myBasket.push(prod);
        },

        removeProduct: function (productID) {
            return myBasket.splice(productID, 1);
        },

        updateProductQuantity: function (productID, quantity) {
            myBasket[productID].quantity = quantity;
        },

        getTotalPrice: function () {
            let totalPrice = 0;
            myBasket.forEach(function (cur, i, arr) {
                totalPrice += cur.totalPrice;
            });
            return totalPrice;
        }
    }
})();


