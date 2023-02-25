


// function eventFunction(){
//     console.log("I have click on document");
// }
// document.addEventListener('click',eventFunction)


// function print(){
//     console.log("I have printed")
// }

 
// document.addEventListener('click',print);

// document.removeEventListener('click',print); 


// const content = document.querySelector('#wrapper');

// function eventList(eventS){
//     console.log(eventS);
// }

// document.addEventListener('click',eventList);


// How to prevent default action

const links = document.querySelectorAll('a');

let thirdLink = links[2];

thirdLink.addEventListener('click', function(event){
    event.preventDefault();
    console.log("Default behavior prevented successfuly")
})


// let myDiv = document.createElement('div');

// function paraStatus(event){
//     console.log('para' + event.target.textContent);
// }
// myDiv.addEventListener('click', paraStatus)
// for(let i=0; i<10;i++)
// {
//     let newPara = document.createElement('p');
//     newPara.textContent='I am new paragraph' + i;
//     myDiv.appendChild(newPara);

// }

// document.body.appendChild(myDiv);


let someThing = document.querySelector('#article1');

someThing.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log("Span pr click kie hai " + event.target.textContent); 
    }
})