console.log("Welcome to JS")

// Primitive STring

// let lastName ='    Babbar';

// console.log(lastName);
// console.log(lastName.length);
// let firstName = new String('Love');


//Tempalte literral

let emailSigniture = `Regards,
chaitanya
Founder of codeSleepRepeat`

// console.log(emailSigniture);


// Date and time

// let Date1 = new Date();

// console.log(Date1);

// Arrays

let numbers=[1,2,3,5];

console.log(numbers);


// arrays of object

let courses = [
    {no:1,naam:'Love'},
    {no:2,naam:'Babbar'}

];

// console.log(courses);

// console.log( courses.includes({no:1, naam:'Love'} ) );

let course = courses.find(function(course) 
{
    console.log("This is first iteration ", course.naam);
    return course.naam === 'Babbar';

})  

console.log(course);


// Removing element from array 

// end 

// console.log(numbers.pop());


//Combine and slicing

let first = [1,2,3];
let second = [4,5,6];

let combined = first.concat(second);

console.log(combined);


let arr= [1,2,3,4,5,6,7];

// for loop

// for( let value of arr)
// {
//     console.log(value);
// }

// arr.forEach(function(number){
//     console.log(number);    
// })

// arr.forEach(number => console.log(number));

// let numArr = [100,10,20,30,40,50];
// const joined = num.join(',');

// console.log(numArr);


let num1 = [5,10,1,2,3,4];

// num1.reverse();

// num1.sort(function(b,a){
//     return b-a;
// });

// num1.sort((a,b)=> b-a);
// console.log(num1);


// In case of object how it will behave


// let data = (
//     { no:5, fName : "Omkar"},
//     {no:1,  fName:"chaitanya"},
//     {no:2, fName:"Sagar"},
//     {no:3, fName:"Varad"},
//     {no:4, fName : "Mayur"}
// );


// data.sort(function(a,b){
//     return a.no -b.no;
// });
// console.log(data);


// Filter the array

let array=[1,2,-4,-3];

console.log(array);
let pos = array.filter(function(value){
    return value < 0;
});

console.log(pos);