class user {
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log("Hallo " , this.name)
    }
}

let User = new user("ripal rusdiansyah");
let person = new user("gobul")
User.sayHi()
person.sayHi()