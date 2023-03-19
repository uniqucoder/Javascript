

// const t1 = performance.now(); 

// for(let i=1; i<=100; i++)
// {
//     let newEle = document.createElement('p');

//     newEle.textContent = 'para ' + i;

//     document.body.appendChild(newEle);
// }
// const t2 = performance.now();

// console.log(t2-t1);


// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=0; i<=100;i++)
// {
//     let nwel = document.createElement('p');
//     nwel.textContent="ppp"+i;

//     myDiv.appendChild(nwel);    
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();

// console.log(t4-t3);


// fragmement


let t1=  performance.now();
let fragmement = document.createDocumentFragment();

for(let i=1;i<=100;i++)
{
    let newElement = document.createElement('p');
    newElement.textContent ="I am para"+i;

    fragmement.appendChild(newElement);
    
}

document.body.appendChild(fragmement);

let t2=  performance.now();

console.log(t2-t1);