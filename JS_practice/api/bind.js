let desc = Object.getOwnPropertyDescriptor(Math, 'PI')
desc.writable = true
console.log(desc);
Math.PI =8
console.log((Math.PI));