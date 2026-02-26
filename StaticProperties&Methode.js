/* dengan menambahkan keyword static didalam class. maka properti atau methode 
 menempel ke class bukan ke instance*/



class user{
    // contoh static property
    static role = 'ADMIN';
// contoh static methode
    static sayHello (){
        console.log("hallo semuanya")
     }
}

console.log("ini adalah static property", user.role)

// cara pakai static methode (namaClass.methode())
console.log("ini adalah static methode ",user.sayHello() ) 


/* CATATAN
-static tidak dapat akses this instace 
CONTOH SALAL

class User {
  constructor(name) {
    this.name = name
  }

  static sayHello() {
    console.log(this.name)
  }
}

- STAT
*/
