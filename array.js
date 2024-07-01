let array=[18,25,3,40,85,6]
/* 
console.log(array)
console.log(`0 index`,array[0])
array[0]=19
console.log(array)
console.log(`array length`,array.length)
 */

/*
for(let i=0; i<array.length; i++){
    console.log(array[i])
} 
*/

/* foreach is used for print and map is used to some changes
array.forEach(
    (i,ele)=>{
    console.log(`Element is ${ele} and index is ${i}`)
})
 */

//let plustwo = array.map((ele)=>{console.log(`every element print with +2`,ele+2)})
//let squareroot = array.map((ele)=>{console.log(`square root`,Math.sqrt(ele))})
//let power = array.map((ele)=>{console.log(`power`,Math.pow(ele,4))})

/*
let max = array.filter((ele)=> {return ele>6})
console.log(max)
*/

/*
let findele = array.find((ele)=>ele == 25)
console.log(findele)

let findindexs = array.findIndex((ele)=>ele == 25)
console.log(findindexs)
*/

let sum = array.reduce((pre,next)=>{return pre+next})
console.log(sum)

let t=0
for(let k=2;k<array.length;k++){
    t = t+array[k]
}
console.log(t)