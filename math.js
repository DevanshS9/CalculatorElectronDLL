//var ffi = require('ffi');
const ffi = require("ffi-napi");
//var ref = require('ref');
//var int = ref.types.int;
var result = null;

var platform = process.platform;
var mathlib = null;




if (platform === 'win32'){
    mathlib = './build/Release/math.dll';
}else if(platform === 'linux'){
    mathlib = './build/Release/math.so';
}else if(platform === 'darwin'){
    mathlib = './build/Release/math.dylib'
}else{
    throw new Error('unsupported plateform for mathlib')
}

var math = ffi.Library(mathlib, {
    "add": ["int32", ["int32", "int32"]],
    "minus": ["int32", ["int32", "int32"]],
    "multiply": ["int32", ["int32", "int32"]]
});


//module.exports = math;

var cal=document.getElementById("calculate");
cal.addEventListener('click',calculation);

function calculation(){
    var no1=document.getElementById("number1").value;
    console.log("value=",no1);
    
    var no2=document.getElementById("number2").value;   

resultAdd = math.add(no1, no2);
document.getElementById("add").innerHTML = resultAdd;
console.log(resultAdd)

resultsub = math.minus(no1, no2);
document.getElementById("sub").innerHTML = resultsub;
console.log(resultsub)

resultmul = math.multiply(no1, no2);
document.getElementById("mul").innerHTML = resultmul;
console.log(resultmul)

}




