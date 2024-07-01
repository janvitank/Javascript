// promise - argument api te print thy ex: reslove({num, str:'happy'}) and multiple reslove not worked only 1st reslove is run

/* let num=10
let p= new Promise((reslove,reject)=>{
    if(num>=1)
        reslove()
    else
        reject()
})

p.then(()=>{console.log('resloved')})
.catch(()=>{console.log('rejected')})  */


/*
let num=10
let p= new Promise((reslove,reject)=>{
    if(num>=10)
        reslove({num, str:'happy'})
    else
        reject('something went wrong')
})

p.then((n)=>{console.log('resloved',n)})
.catch((err)=>{console.log('rejected',err)})  */



/*
let num=10
let p= new Promise((reslove,reject)=>{
    if(num>=10){
        reslove({num, str:'happy'}) // 1st reslove is run, multiple reslove is not work
        reslove('hello')
        reslove('hyee')
    }
        
    else
        reject('something went wrong')
})

p.then((n)=>{console.log('resloved',n)})
.catch((err)=>{console.log('rejected',err)})

*/

function fun(num){
    return new Promise((reslove,reject)=>{
        if(num<=10){
            reslove(num)
        }
        else
            reject('error')
    })
}

function fun1(){
    return Promise.resolve(console.log('resloved'))
}
fun(12).then((n)=>{console.log('promises resloved',n)})
.catch((err)=>{console.log('promises rejected',err)})

fun1().then((n)=>{console.log('promises resloved')})