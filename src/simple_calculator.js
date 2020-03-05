//This function adds two integers
function add(no1, no2) {
    return (no1 + no2);
};



// This function adds multiple integers
function add() {

    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {

        sum += arguments[i];

    }

    return sum;
};

//This function multiply two integers
function multiply(no1, no2) {
    return (no1 * no2);
};


// This function multiplies multiple integers
function multiply() {

    let product = 1;

    for (let i = 0; i < arguments.length; i++) {

        product *= arguments[i];
    }

    return product;
};

module.exports = {
    add,
    multiply
}