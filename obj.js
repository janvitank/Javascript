let stu = {name: `janvi`, lname: `tank`, age: 20, ismarraied: true }
console.log(stu)
console.log(stu.age) 

// ==============================================================================

let{lname: lastname, ismarraied}= stu
console.log(ismarraied)
console.log(lastname)
console.log(stu.name)

// ================================================================================

let email = `janu@gmail.com`
let password = `janu123`
let a = 20
let login 
// login = {email : email, password: password, age:a }
login = {email, password, age:a }
console.log(login) 

// =========================================================================================

 let emp=stu
 emp.ismarraied=false
 console.log(`employee`,emp)
 console.log(`student`,stu)

// ===================================================================================

let emp1= {stu}
emp.ismarraied=false
console.log(`employee2`,emp1) 

// ==================================================================

let emp2= {...stu}
emp2.ismarraied=false
console.log(`employee2`,emp2)
console.log(`student`,stu)

let person = {...stu, age:19}
console.log(person)
