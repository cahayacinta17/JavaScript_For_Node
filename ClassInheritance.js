class student{
    constructor(name){
        this.name = name
    }

    sayHI(){
        console.log(`hallo ${this.name}`)
    }

}


class person extends student {
    constructor(name, major){
        super(name)
        this.major = major
    }

    study(){
        console.log(`${this.name} , is study ${this.major}`)
    }

    // override methode

    sayHI(){
        console.log(`hallo ${this.name} ini dari class parent`)
    }
}

const s1 = new person("ripal rusdiansyah","sarjana informatika")
const s2 = new student("nania")
s1.sayHI()
s1.study()

console.log("======================")

s2.sayHI()