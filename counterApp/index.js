
const countvalue = document.querySelector('#count');

const incr = () =>{

    let value = parseInt(countvalue.innerText);
    value = value +1;
    countvalue.innerText = value ;
};

const decr = () =>{

    let value = parseInt(countvalue.innerText);
    value = value -1;
    countvalue.innerText = value;
};