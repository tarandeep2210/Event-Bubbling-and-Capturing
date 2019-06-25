// // document.querySelector("#grandparent").addEventListener("click", () => {
// //     console.log("Grandparent");
// // },false);

// // document.querySelector("#parent").addEventListener("click", () => {
// //     console.log("parent");
// // },false);

// // document.querySelector("#child").addEventListener("click", (e) => {
// //     console.log("Child");
// //     e.stopPropagation();
// // },false);


// function foo(a,b){
//     arguments[0]=2;
//     alert(a);
// }
// foo(); //undefined

// var test =500;
// var result = function(){
//     console.log(test);
//     var test =1000;
// }
// result(); // undefined

// var x =500;
// let y,z,p,q;
// q=200;
// x=y=z=p=q;
// console.log(q,x,y); //200

// function my () {
//     var arr = [2,5,8,15];
//     Array.prototype.sort = function(a,b){
//         return a-b;
//     };
//     arr.sort();
//     console.log(arr);
// } 
// my();
// function my1 () {
//     var arr = [2,5,8,15];
//     Array.prototype.sort = function(a,b){
//         return a-b;
//     };
//     arr.sort(function(a,b) {
//         return a-b;
//     });
//     console.log(arr);
// } 
// my1();

// console.log(4+3+2+"1"+4); //914


// var empId = '123';
// (function() {
//         console.log(empId);
//         var empId = '122';
//         (function() {
//             var empId = 'ac';
//         }());
// }());  // undefined

// var obj = { 0 : '23' , 1: 'gfg' , 2 : 'true'};

// console.log(Object.values(obj));

// console.log( typeof ("" || null || undefined),undefined==null,0==""); //undefined,true,true

// var arr = [10,32,65,2];

// for( var i=0; i<arr.length ;i++){
//     setTimeout(function(j){
//         return function(){
//             console.log(j);
//         };
//     }(i),3000); 
// }  //0 1 2 3

// let myy = {
//     name : 'Lee'
// };
// Object.freeze(myy);
// myy.name  = 'a';
// console.log(myy); // Lee

// var dummyObj = {
//     price : 199,
//     get_price : () => {
//         return this.price;
//     }
// };
// var realObj = Object.create(dummyObj);
// realObj.price=299;
// delete realObj.price;

// console.log(realObj.get_price());  // undefined

// function dummy(){
//     return {
//         test : 1
//     }
// }
// console.log(dummy());

// var cloths =["Shirt" , "pant"];

// console.log(cloths.pop());

// function Test1(name) {
// let a= name;

// function Test2(obj){
//     console.log("Ouut : ", this.a);
// }
// Test2();
// }

// Test1("DBS"); //unfdefined


// (function foo1(){
//     bar1();

//     function bar1(){
//         abc();
//         console.log(typeof abc);
//     }

//     function abc(){
//         console.log(typeof bar1);
//     }
// });  // fn fn

console.log('one');
setTimeout(function(){
    console.log('two');
},0);
Promise.resolve().then(function(){
    console.log('three');
});
console.log('fur');  // 1432

let obj12 = { name  : 'Test'}
console.log(obj12.name);
obj12.name = 'Test2';

console.log(obj12.name);
 obj12 = { name : 'Test3'};
console.log(obj12.name); // 1 2 error

function mul(x) {
    return function(y){
        return function(z){
            return function(w){
                return function(p){
                        return x*y*z*w*p;
                };
            };
        };
    };
}

console.log(mul(2)(3)(4)(5)(6));

(function () {
    var objA = {
        0 : 'foo',
        1 : 'bar'
    };
    var objB = {
        0 : 'foo',
        1 : 'bar'
    };
    console.log(objA==objB);
    console.log(objA===objB);
}());
