console.log('call, bind, js');

let car =['tigor', 'tiago', 'nexon', 'altroz'];

function setUserName(username){
    this.username = username;
    console.log(':',username);
}

function creteUser(username, email, password){
    setUserName.apply(this,[username]);
    this.email =email;
    this.password = password
}
const chai = new creteUser('andhu', 'andhu@fb.com','zz');
console.log(chai);