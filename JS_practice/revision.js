// Example of this, new prototype 
function createUser(name, price) {
    this.name = name
    this.price = price
}

createUser.prototype.increment = function () {
    this.price++
}
createUser.prototype.printMe = function () {
    console.log(`${this.name} costs ${this.price}`)
}

let chai = new createUser('chai', 24)
let tea = new createUser('tea', 240)
console.log(Object.getPrototypeOf(tea));
