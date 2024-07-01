//async by default return promise
async function fun(){
    return 'hello'
}

console.log(fun())

fun().then((res)=>{console.log('resloved',res)})
.catch((err)=>{console.log('err',err)})