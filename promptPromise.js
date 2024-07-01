import prompt from "prompt";
prompt.start
prompt.get(['num'],(err,res)=>{
    console.log(res.num)
    let p1= new Promise((reslove,reject)=>{
        if(res.num>=10)
            reslove()
        else
            reject()
    })

    p1.then(()=>{console.log(res.num,'resloved')})
    .catch(()=>{console.log(res.num,'rejected')})
    .finally(()=>{console.log('final promise')})

})