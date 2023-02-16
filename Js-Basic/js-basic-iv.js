console.log("JS Is linked")


function run()
{
    console.log("Running");
}

run();

let stand = function()
{
    console.log('Walking')
}

stand();

//Dynamic function

function sum(){
    let total = 0;
    for(let value of arguments)
        total = total+value;
    
    return total;
}



console.log(sum(1,3,5,6,7));

// rest function


// function addition(num1,...args)
// {
//     console.log(args);
// }

// addition(1,2,3,4,5);

// Getter and setter

let person = {
    fName:'Chaitya',
    lName:'Tupsamudre',

    get fullName()
    {
        return ` ${this.fName} ${this.lName}`;
    },

    set fullName(value)
    {
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }


}

// console.log(` ${person.fName}    ${person.lName}`);
console.log(person.fullName);
person.fullName='Rahul Kumar';
console.log("Updated Full Name");
console.log(person.fullName);


