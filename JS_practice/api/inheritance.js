console.log('inheritance');
class User{
    constructor(userName){
        this.userName= userName
    }

    printMe(){
        console.log(`Username is ${this.userName}`);
    }
}

class Teacher extends User{
    
    constructor(userName, email, password){
        super(userName)
        this.email = email
        this.password= password
    }

    addCourse(){
        console.log(`New course added by ${this.userName}`);
    }

}

let user = new Teacher('chavi')
console.log(":: ",user);

let teacher = new Teacher('chavi', 'chav@kv.com','ghusand')
console.log(teacher);
console.log("----",teacher instanceof User);