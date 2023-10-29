class hamster{
    constructor(name){
        this.owner = '';
        this.name = name;
        this.price = 15;
    }
    wheelRun(){
        console.log('squeak squeak');
    }
    eatFood(){
        console.log("nibble nibble");
    }
    getPrice(){
        return this.price();
    }
}

class person {
    constructor(name, age, height, weight, mood, hamster, bankAccount){ 
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamster
        this.bankAccount = bankAccount
    };
    getName(){
        return this.name
    };
    getAge(){
        return this.age + " years old"
    };
    getWeight(){
        return this.weight + " lbs"
    }
    greet(){
        return "Hi my name is " + this.name
    };
    eat(){
        return (this.weight = this.weight + 3)+ " lbs" 
    };
    excercise(){
        return (this.weight = this.weight - 3) + " lbs"
    };
    ageUp(){
        return console.log(this.Age + 1 + " years old"), console.log(this.height + 3 + " cm"), console.log(this.mood - 5 + " Mood Points"), console.log(this.bankAccount + 10 + " dollars")
    };
    buyHamster(){
        return getPrice(this.value)
    }
}

const Hampter = new hamster("", "Gus", 10);
// console.log(Hampter.wheelRun);

//height is measured in cm for ease of coding, and weight is in lbs
const Timmy = new person ("Timmy", 5, 10, 109, 43, 0, 0, 20)
console.log(Timmy.excercise)

// class Dinner {
//     constructor(appetizzer, entree, dessert){
//         this.appetizzer = appetizzer;
//         this.entree = entree;
//         this.dessert = dessert;
//     }
// }

// // class Chef{
// //     constructor(){
// //     }
// // }

// let Chef = {} 