



// let meraPromise1 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log('Im inside promise1');
//         },5000);
//         // console.log("I am inside the promise");
//         // reject(new Error('error aaya hai !!'));

//         // resolve(2232);
        
// });

// let meraPromise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Im inside promise2');
//     },3000);
//     // console.log("I am inside the promise");
//     // reject(new Error('error aaya hai !!'));

//     // resolve(2232);
    
// });

// console.log("phela");


// let waada1 = new Promise(function(resolve,reject){
    
//     setTimeout(function(){
//         console.log("Inside settimeout 1");
//     },2000);

//     resolve("waada1 resolved");
// });


// let output = waada1.then( ()=> {
//     let waada2 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("inside settimeput 2");
//         },3000);

//         resolve("wada2 is resolved");
//     })
//     return waada2;
// })


// output.then((value) => console.log(value))


// Async await



// async function utility()
// {
//     let delhiMohsum = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Delhi ka mohsum garam hai");
//         },6000);
//     });
    
//     let hydMohsum = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Hyd is cool");
//         },2000);
//     });

//     let dM = await delhiMohsum;
//     let hM = await hydMohsum;

//     return [dM,hM];
// }

// utility();
// console.log("DOne");


// fetch api

async function utilityF()
{
    // let contentApi = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    // // let outputApi = (await contentApi).json;
    // let outputApi = contentApi.json();

    // console.log(outputApi);

    let content = await fetch('https://jsonplaceholder.typicode.com/posts');

    let response = await content.json();
    console.log(response);
}


utilityF();


// async function utility1(){

//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           id: 1,
//           name: 'chaitanya',
//           lname: 'tupsamudre',
//           userId: 111,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
    
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
//     let response = content.json();

//     return response;
// }

// async function helper()
// {
//     let ans = await utility1();
//     console.log(ans);
// }

// helper();


