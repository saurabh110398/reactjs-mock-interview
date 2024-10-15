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
console.log('chai:: ', chai);
// chai.increment()
// chai.printMe()
tea.increment()
tea.printMe()
// console.log(chai)
// console.log(tea);


// example of __proto__---Prototype inheritance

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false,
    salary: 30000
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    // __proto__: TeachingSupport//depricated syntax

}
Object.setPrototypeOf(TASupport, TeachingSupport)
//  console.log(Object.getPrototypeOf(TASupport));
//  console.log(TASupport.isAvailable)



//  Example to add extra property
let username = 'HappyWednesday        ';
// console.log('::',username.length);

String.prototype.trueLength = function () {
    console.log(this);
    console.log(`True length is: ${this.trim().length}`);
}

// console.log('okomo    '.trueLength());

let trueLength = function () {
    console.log(this);
    console.log(this.trim().length);
    return this.trim().length;
}
Object.setPrototypeOf(String, trueLength)
// console.log(username.trueLength());


// Calll---> Callstack (())

// function states(districtName){
//     this.districtName = districtName
// }

// function districts(districtName, pincode){
//     states.apply(this,[districtName]);
//     this.pincode = pincode
//     return `${districtName} with ${pincode}`
// }
//  let result = new districts('Kanpur', 208021)
//  console.log(result)

function SetUser(userName) {
    console.log('called : ', userName);
    this.userName = userName
}

function createUser1(userName, email) {
    // SetUser.call(this,userName)
    SetUser.apply(this, [userName])
    this.email = email;

    return ` Hi, ${userName} with ${email}`

}

let user1 = new createUser1('Raju', 'raju@x.com')
console.log(user1);
let user2 = new createUser1('Sukku', 'sukku@fb.com')
console.log(user2);

// Reduce
let array = [1, 2, 3, 4, 5, 6]
let init = 0;
const sum = array.reduce((acc, curr) => {
    console.log(acc, curr);
    return acc + curr
})
console.log('Reduce output: ', sum);

// Classes ES6

class User {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    changeName() {
        return `Updated name is ${(this.fname).toUpperCase()}`
    }
}
let u1 = new User('heeru', 'Chaddha');
console.log('u1:: ', u1.changeName());
//using old school function constructor

function oldSchool(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

oldSchool.prototype.changeName = function () {
    return `Updated name is ${(this.fname).toUpperCase()}`
}

let ol1 = new oldSchool('ravi', 'Kaur')
console.log('ol1:: ', ol1.changeName());


// Class based inheritance

class User1 {
    constructor(userName, age) {
        this.userName = userName
        this.age = age
    }
    logMe() {
        return `Username is ${this.userName} with age=${this.age}`
    }
}

class Teacher1 extends User1 {

    constructor(userName, age, email, password) {
        super(userName, age)

        this.email = email;
        this.password = password
    }

    loggTeacher() {
        return `Userdata: ${this.userName} +${this.age}+${this.email}+${this.password}`
    }
}

let tt = new Teacher1('chavi', '33', 'chavi@kv.com', '123');
console.log('tt : ', tt.loggTeacher());


// Bind


console.log('---------**********___________________');
