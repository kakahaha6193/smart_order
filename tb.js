let url = './aaa.txt';
let url2 = './bbb.txt';
let fs = require('fs');
let readFile = (url) => {
    return new Promise((resolve,reject)=> {
       fs.readFile(url,'utf-8',(err,data)=>{
           if(err) return reject(new Error(err));
           resolve(data);
       })
    });
}

readFile(url)
.then(res => {
    return res; 
})

.then(res => {
    if(res){
        console.log(1);
        return res;
    }else{
        console.log(2);
        return readFile(url2);
    }
})
.then (res => console.log(res))
.catch (err => {
    console.log(err);
})