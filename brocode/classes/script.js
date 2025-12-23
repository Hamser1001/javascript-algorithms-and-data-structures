class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProducts() {
        console.log(`Products: ${this.name}, Price: $${this.price}`);
    }
}

const product1 = new Products("Shirt", 19.99);
product1.displayProducts();

const product2 = new Products("Pants", 29.99);
product2.displayProducts();