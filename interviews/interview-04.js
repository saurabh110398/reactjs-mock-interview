//  Any random tag created in html behaves as inline element

// Flex--> child become block elements

// Deep copy
let obj = {
    name: 'Harry',
    age:'28',
    address:{
        state:'UP'
    }
}
let obj2 = JSON.parse(JSON.stringify(obj));
// obj.age =39;
// obj.address.state='MP'
console.log(obj);
// console.log(obj2);

//shallow copy
let obj3 = Object.assign(obj)
obj.address.state = 'KA'
console.log(obj);
console.log(obj3);

// closure

function outer(){
    let val =10;

    function inner(){
        console.log(val);
    }
    return inner;
}

let result = outer();
// console.log(result());

// ----------------hoisting

console.log('hoisting :: ',a);
// console.log(b);
var a=b=10
// Here, b = 10 is not declared using var, let, or const,
//  so JavaScript treats b as a global variable. 
// This means that even though it was assigned in the same line as a, b will be available in the global scope.

console.log(1 < 2 < 3);//true
console.log(3 > 2 > 1);//false


let foo = function(){
    console.log('this call :: ',this.name);
    let bar =()=>{
        console.log('bar:: ',this.name);       
    }
    bar()
}
foo.call({name:'Jhon'})

let user ={
    id:123,
    name:'Jason',
    age:23,
    address:{
        city:'Chapara',
        state: 'Bihar'
    }
}
Object.defineProperty(user,
    'id',{
        writable:false
    }
);
user.id=99
user.age =76
console.log(user);





