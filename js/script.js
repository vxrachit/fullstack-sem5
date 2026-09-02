// let arr = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0; i<arr.length ; i++){
//     console.log(arr[i]**2);
// }

// var add = (a,b) => {
//     console.log(a+b);
// }
// add(2,3);

// var print = (arr) => {
//     for(let i = 0 ; i<arr.length ; i++){
//         console.log(arr[i]);
//     }
// }

// print(arr);

// var a = 10;
// function test(){
//     console.log(a); // hoisting happens inside function
//     var a = 20;
// }
// test();


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