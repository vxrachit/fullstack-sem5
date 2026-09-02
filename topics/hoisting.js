var a = 10;
function test(){
    console.log(a); // hoisting happens inside function
    var a = 20;
}
test();


var b = 100;
function one(){
    console.log(b);
    if(true){
        var b = 50;
    }
    console.log(b);
}

one();
console.log(b);

// MCP -> variable , function and class