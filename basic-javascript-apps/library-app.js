// build an app for tracking books in library using classes in javascript.



class Book {
  constructor(title, author, isInStock) {
      this.title = title;
      this.author = author;
      this.isInStock = isInStock;
  }
  toggleIsInStock() {
      this.isInStock = !this.isInStock;
  }
  getPrototype() {
      console.log(Object.getPrototypeOf(this))
  }
}

class RareBook extends Book {
  constructor(title, author, isInStock, location, isVerified) {
      super(title, author, isInStock)
      this.location = location;
      this.isVerified = isVerified;
  }
  getLocation() {
      console.log(this.location)
  }
  toggleIsVerified() {
      this.isVerified = !this.isVerified;
      if (this.isVerified) {
          console.log(`${this.title} has been verified by an independent expert.`)
      }
      else {
          console.log(`${this.title} has not been verified by an independent expert.`)
      }
  }
  toggleIsInStock() {
      super.toggleIsInStock()
      if (this.isInStock) {
          console.log(`${this.title} is in stock.`)
      }
      else {
          console.log(`${this.title} is not in stock.`)
      }
  }
}
class BestSeller extends Book{
  constructor(title, author, isInStock, numberSold){
    super(title, author, isInStock);
    this.numberSold = numberSold;
  }
  increaseSoldCount(amount){
    this.numberSold += amount;
  }
  toggleIsInStock(){
    super.toggleIsInStock()
    console.log(`${this.title} has ${this.isInStock ? 'been restocked' : 'run out of stock'}.`);
    console.log(`Number of copies sold: ${this.numberSold}`);
  }

}

const bestSellerBook = new BestSeller('The Shit Book', 'Shit Author', false, 1000);
bestSellerBook.toggleIsInStock();
