/*I copy pasted this code from a previous project on replit
https://replit.com/@EmanuelLeon2022/Javascript-Classes-HW#index.js
I used this in order to test my the settings on my old code
*/
class Hamster {

  constructor(owner, name, price){
    this.owner = owner;
    this.name = name;
    this.price = price;

  }
  get getPrice(){
    return this.money();
  }
  money(){
    return this.price;
  }
}

const Hampter = new Hamster("", "Hampter ", 15);
console.log(Hampter.getPrice);