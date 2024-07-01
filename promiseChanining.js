function fun(count){
    return new Promise((reslove,reject)=>{
        if(count<=10)
            reslove(count)
        else
            reject('err')
    })
}

function fun1(str){
    return Promise.resolve(console.log('resloved fun1 promises'))
}

let fun2 = (str)=>{
    return new Promise((reslove,reject)=>{
        if(str =='hello')
            reslove(str)
        else
            reject('reject fun2')
    })
}
   


// then catch
fun(2).then((data)=>{console.log('resloved fun')
    return fun1().then(()=>{console.log('resloved fun1')
        return fun2('hello').then((name)=>{console.log('resloved fun2',name)})
    })
})
.catch(()=>console.log('rejected promise'))