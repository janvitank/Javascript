import prompt from "prompt";
prompt.start


/* prompt.get(['number'],(err,res)=>{
    if (err) throw err
    console.log(res.number)
}) */

/*
prompt.get(['number'], (err, res) => {
    if (err) throw err
    console.log(res.number)
    if (res.number <= 10) {
        res.number++
        console.log(res.number)
    }
    else {
        res.number--
        console.log(res.number)
    }
}) 
*/

prompt.get(['name','lname'],(err,res)=>{
    if(err) throw err
    console.log('Enter name:',res.name)
    console.log('Enter name:',res.lname)
    console.log(res.name)
    console.log(res.lname)
})