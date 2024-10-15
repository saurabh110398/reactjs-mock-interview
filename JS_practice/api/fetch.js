const { log } = require("console");

console.log('fetch');

function creteUser(item, price){
    this.item = item;
    this.price = price
    console.log(this.price, this.item)
}

creteUser.prototype.plus = function(){
    this.price++;
    console.log(`incremented cost ${this.price}`)
}
creteUser.prototype.prnt = function(){
    console.log(`${this.item} costs ${this.price}`)
}
let tea = new creteUser('tea',44);
console.log(tea.prnt,':',tea)
tea.prnt()
tea.plus()

let car =['tigor', 'tiago', 'nexon', 'altroz'];

Object.prototype.hatch = function(){
    console.log('Hatchback available.');
};

let user={
    name:'Dhillon'
}
console.log(car.hatch());
console.log(user.hatch());

Object.setPrototypeOf(car, user )
console.log(';',car.name);
console.log('hurry.     '.trim().length);