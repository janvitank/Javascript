function fun(count){
    return new Promise((resolve,reject)=>{
            if(count  <= 10)
                resolve({count:count,str:"Happy"})
            else 
                reject("Something went wrong")
        })
}

function fun1(){
    return Promise.resolve("hello from promise")
}

let  fun2=(str)=>{
    return new Promise((resolve,reject)=>{
        if(str =="Ram")
            resolve(str)
        else 
            reject("Something went wrong")
    })
}

async function fun3(){return 'async fun3'}

let asyncwait = async()=>{
    try{
    let a = await fun(3)
    console.log(a)
    let b = await fun1()
    console.log(b)
    let c = await fun2('Ram')
    console.log(c)
    let d = await fun3()
    console.log(d)
    }
    catch{
        console.log('rejected promise err')
    }
    
}
asyncwait()