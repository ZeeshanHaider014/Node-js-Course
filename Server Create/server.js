
 
// function add(a, b){
//     return a + b;
// }
// var add = (a, b)=>a + b;
// var sum = add(440, 344)
// // console.log('Sum = ', sum)
// (function(){
//     console.log('MY NAME IS ZEESHAN')
// }

// )();

// function callback(){
//     console.log('My name us zeeshan haider ')
// }

// function add(a,d,callback){
//     var result = a + d;
//     console.log('SUM = ', result)
//     callback();
// }
// add(12,33,callback)

var fs = require('fs')
var os = require('os')

var user = os.userInfo();
console.log(user.username)

fs.appendFile('greeting.txt', 'Hi' +user.username + '!\n', ()=>{
    console.log('file Created Sucessfuly')
})
