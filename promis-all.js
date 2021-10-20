const {resolve,reject} = require('promise') 

function getNme(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("souban")
        },3000)
    })
}

function getmobile(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("1265262655")
        },2000)
    })
}


//Promise.all ([getNme(),getmobile()]).then((result)=>{
 //   console.log(result)
//})

async function getUser(){
    let name=await getNme()
    console.log(name)
    let mobile=await getmobile()
    console.log(mobile)
}

getUser()

