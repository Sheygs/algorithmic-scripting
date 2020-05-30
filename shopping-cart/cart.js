class ShoppingCart {
 constructor() {
     this.total = 0;
     this.items = {};
 }

 addItem(itemName, quantity, price) {
     this.total += quantity * price;
     if (!this.items[itemName]) {
         this.items[itemName] = 0;
     }
     this.items[itemName] += quantity;
 }

 removeItem(itemName, quantity, price) {
     this.total -= quantity * price;
     if (this.items[itemName]) {
         this.items[itemName] -= quantity;
     }

     if (this.items[itemName] < 0 || !this.items[itemName]) {
         this.items[itemName] = 0;
     }
 }

 checkout(cashPaid) {
     if (cashPaid < this.total) {
         return "Cash paid not enough";
     } else {
         return cashPaid - this.total;
     }
 }
}
//inheritance
class Shop extends ShoppingCart {
 constructor() {
     super();
     this.quantity = 100;
 }

 removeItem() {
     --this.quantity;
 }
}


let shop = new Shop();
shop.removeItem();
console.log(shop.quantity);
