/*function outer(){ print 3 3 3
    var arr = [];
    for(var i = 0; i<3; i++){
        arr.push(function inner(){
            console.log(i);
        })
    }
    return arr
}*/
/*function outer(){  print 0 1 2
    var arr = [];
    for(let i = 0; i<3; i++){
        arr.push(function inner(){
            console.log(i);
        })
    }
    return arr
}*/
/*function outer(){
    var arr = [];
    for(var i = 0; i<3; i++){
        var fn = (function (num){
            console.log(num)  // 10 20 30
            console.log(this) // this => 0 , 1, 2
        }).bind(i)
        arr.push(fn)
    }
    return arr
}*/
/*function outer(){  print  0 1 2
    var arr = [];
    for(var i = 0; i<3; i++){
        var fn = (function newFn(){
            var j =i;
            return function abc(){
                console.log(j)
            }
        })()
        arr.push(fn)
    }
    return arr
}*/
/*function outer(){
    var arr = [];
    for(var i = 0; i<3; i++){
        var fn = (function (i){
            console.log(i)  // 0,1,2
            console.log(this) // this => window object
        }).bind(null,i)
        arr.push(fn)
    }
    return arr
}
let arr = outer();
arr[0](10);
arr[1](20)
arr[2](30);*/

/*for(var i=0; i<3;i++){
    setTimeout(function(){
        console.log(i)  // 3 3 3
    },1000)
}

for(let i=0; i<3;i++){
    setTimeout(function(){
        console.log(i)  // 0 1 2
    },1000)
}
*/
/*
for(let i=0; i<3;i++){
    setTimeout(function(i){  //..i
        console.log(i)  // undefined undefined undefined
    },1000)
}*/
/*for(var i=0; i<3;i++){
    setTimeout(function(i){ //i
        console.log(i)  // undefined undefined undefined
    },1000)
}*/
/* =========== serial =========== */
/*var fs = require("fs");
console.log("before")
console.log("f1 sent")
fs.readFile("./f1.txt", cb);
function cb(err , content){
    if(err){
        console.log(err);
    }else{
        console.log("content "+content);
        console.log("f2 sent")
        fs.readFile("./f2.txt", cb2);
    }
}
function cb2(err , content){
    if(err){
        console.log(err);
    }else{
        console.log("content "+content);
        console.log("f2 sent")
        fs.readFile("./f3.txt", cb3);
    }
}

function cb3(err , content){
    if(err){
        console.log(err);
    }else{
        console.log("content "+content);
        
    }
}
*/
/* ========= parallel  ========== */
/*var fs = require("fs");
console.log("before")
console.log("f1 sent")
fs.readFile("./f1.txt", cb);
console.log("f2 sent")
fs.readFile("./f2.txt", cb);
console.log("f3 sent")
fs.readFile("./f3.txt", cb);
function cb(err , content){
    if(err){
        console.log(err);
    }else{
        console.log("content "+content);
        
        
    }
}
console.log("after")
*/


/* ========= serial reader using recursion =========== */
let file = ["f1.txt" , "f2.txt" , "f3.txt"]
var fs = require("fs");
console.log("before")
function serialReader(n){
    if(n == file.length){
        return;
    }
    fs.readFile(file[n] , function(err , content){
        if(err){
            console.log(err)
        }else{
            console.log("content of " + n  +" " , content)
            serialReader(n+1);
        }
    })
}

serialReader(0)
console.log("after")