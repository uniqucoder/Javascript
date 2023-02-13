
console.log("Lets start");

// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw : function(){
//         console.log('draw')
//     }
// }


function createRectangle(len,bread) {

    return rectangle = {
        length: 1,
        breadth: 2,
    
        draw : function(){
            console.log('draw')
        }
    };


}

let rectangleObj = createRectangle(5,4);

let obj2 = createRectangle(1,2);

// Constructor in JS

function Rectangle1(len,bred) {
    this.length = len;
    this.breadth = bred;

    this.draw = function(){
        console.log("I am drwaing ");
    }
    
}

let Rect = new Rectangle1(1,2);

// Dynamaicc nature of Object

Rect.color = "yellow";
console.log(Rect);

delete Rect.color;
console.log(Rect);

let Rectangle = new Function(
    'length',
    'breadth', 
    `this.length = len;
    this.breadth = bred;

    this.draw = function(){
    console.log("I am drwaing ");
}`);


console.log("We are Learning about Primitive and reference type in JavaScript");


let a = 5;
 
let b = a ;

console.log(a);
a++;
console.log(b);

let aa = {value:3};
let bb = aa;

console.log(aa.value);
aa.value++;

console.log(aa.value);

console.log(bb.value);


// For in loop

let src = {
    a:10,
    b:20,
    c:30
};

// console.log(src);

for (let key in src)
{
    console.log(key , src[key]);
}