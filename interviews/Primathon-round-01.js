let obj ={
    name:'Programm',
    age :34,
    displayData(){
        return (()=>{
        console.log(this.age)
        return 'na'
    })
    },
    greet: ()=>{
        console.log('Wiil give undefined:: ',this.age)
    }
}
// let result = obj.displayData();
// console.log(result())
console.log(obj.greet())


// ---------------------------------------------------------------
function add(){
    if(true){
        console.log('first log:: ',x);
        var x=30;
    }
    // var x=40;
    console.log('2nd log:: ',x)
}
add();