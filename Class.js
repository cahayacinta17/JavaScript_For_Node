class user {
    constructor(name){
        this.name = name;
    }

    sayHi(){
        alert("Hallo " , this.name)
    }
}

let user = new user("ripal rusdiansyah");
user.sayHi()