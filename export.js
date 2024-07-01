class Person{
    constructor(fn, ln ,age){
        //data member
        this.firstname=fn
        this.lastname=ln
        this.age=age
    }
    //data function
    display(){
        return `${this.firstname} ${this.lastname} and ${this.age}`
    }
}

export default Person

let data = new Person (`janvi`, `tank`, 20)
console.log(data.display())