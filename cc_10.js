//////////////////////////////////////
// Task 1: Creating a Product Class //
//////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Creating a Product Class");

class Product {
    constructor(name, id, price, stock) {
        this.name = name
        this.id = id
        this.price = price
        this.stock = stock
    }

    // Return string of Product details
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    // Decrement stock quantity by the specific amount
    updateStock(quantity) {
        if (quantity > this.stock){
            console.log("Exceeds Stock Amount");
        }
        else {
            this.stock -= quantity;
        }
    }
}

const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails());   // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails());   // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

/////////////////////////////////////
// Task 2: Creating an Order Class //
/////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 2: Creating an Order Class");

class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId
        this.product = product
        this.quantity = quantity
        this.product.updateStock(quantity)
    }

    // return string with Order details
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`;
    }
}

const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());   // Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails());         // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

/////////////////////////////////////////
// Task 3: Creating an Inventory Class //
/////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Creating an Inventory Class");

class Inventory {
    products = [];
    orders = [];
    
    // add an Order on to orders array
    placeOrder(orderId, product, quantity) {
        this.orders.push(new Order(orderId, product, quantity));
    }
    
    // add a Product on to products array
    addProduct(product) {
        this.products.push(product)
    }

    // print out details of each product in the products array
    listProducts() {
        this.products.forEach(product => console.log(product.getDetails()));
    }

    // print out details of each order in the orders array
    listOrders() {
        this.orders.forEach(order => console.log(order.getOrderDetails()));
    }

    // increment the product stock count by specified quantity amount
    restockProduct(productId, quantity) {
        // first fine the specific product in the products array
        let index = this.products.findIndex((element) => element.id === productId);

        if (index == -1){
            console.log("Product Not Found");
        }
        else {
            this.products[index].stock += quantity;   // increment stock count for specific product
        }
    }
}

const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();    // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"


///////////////////////////////////////////
// Task 4: Implementing Order Management //
///////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 4: Implementing Order Management");

// Added placeOrder method to Inventory class

inventory.placeOrder(601, prod1, 2);
inventory.listOrders();           // Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"

/////////////////////////////////////////////
// Task 5: Implementing Product Restocking //
/////////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 5: Implementing Product Restocking");

// Added restockProduct method to Inventory class

inventory.restockProduct(101, 5);
console.log(prod1.getDetails());    // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"

