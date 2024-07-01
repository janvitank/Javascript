let str= 'janvi' // global var
function sum(){
    let n1=2, n2=5 // local var
    let sum = n1 + n2
    console.log(`sum ${sum} and ${str}`)
}
sum()

//============================================================================================

function fun(n1, n2){
    console.log(`n1 ${n1} and n2 ${n2}`)
}
fun(10,20)

// =================================================================================

function fun(n1, n2){
    return n1+n2
}
let result = fun(10,20)
console.log(result) 

// ==========================================================================================

let funs = function(n1, n2){
    return n1+n2
}
console.log(funs(1,2)) 

// ==========================================================================================

 let fun1 = ()=>{
    let n1=3, n2=4
    console.log(n1,n2)
}
fun1() 

// ====================================================================================

let fun2 = (n,nn) => n + nn
console.log(fun2(`janvi`, `tank`))

