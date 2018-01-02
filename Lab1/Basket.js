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
        this.inventory -= 1;
    }

    set inventory(inventory){
        this.product.inventory = inventory;
    }

    get inventory(){
        return this.product.inventory;
    }

    get price() {
        return this.product.price;
    }

    get totalPrice() {
        return this.product.price * this.quantity;
    }

    set updateInventory(quantity){
        this.inventory += this.quantity;
        this.inventory -= quantity;
        this.quantity = quantity;
    }
}


var basket = (function () {
    let myBasket = new Array();
    return {

        addProduct: function (productID) {
            let prod = new ProductLineItem(products[productID]);
            return myBasket.push(prod);
        },

        removeProduct: function (productID) {
            myBasket[productID].updateInventory = 0;
            return myBasket.splice(productID, 1);
        },

        updateProductQuantity: function (productID, quantity) {
            let basket = myBasket[productID];
            basket.updateInventory = quantity;
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
