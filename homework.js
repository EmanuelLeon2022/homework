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
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = []
        this.bankAccount = 40
    };
    getName(){
        return this.name
    };
    getAge(){
        return this.age
    };
    getWeight(){
        return this.weight
    }
    greet(){
        console.log(`I am ${this.name} hello`)
    }
    eat(){
        this.weight++
        this.mood++
    };
    excercise(){
        this.weight--
    };
    ageUp(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount+=10
    };
    buyHamster(){
        this.hamsters.push(hamster)
        this.mood+=10
        this.bankAccount-=hamster.getPrice
    }
}

//height is measured in cm for ease of coding, and weight is in lbs
const Timmy = new person ("Timmy", 5, 10, 109, 43, 0, 0, 20)
for (let i=0; i <5; i++){
    Timmy.ageUp()
}
for (let i=0; i <5; i++){
    Timmy.ageUp()
}
for (let i=0; i <5; i++){
    Timmy.excercise()
}
for (let i=0; i <9; i++){
    Timmy.ageUp()
}
const Gus = new hamster('Gus');
Gus.owner = 'Timmy'
Timmy.buyHamster(Gus)

for (let i=0; i <15; i++){
    Timmy.ageUp()
}
Timmy.eat()
Timmy.excercise()
console.log(Timmy)

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