import './styles.css';

console.log('AYO AYO!');

function fibs(num) {

    let xMinus2 = 0;
    let xMinus1 = 1;
    let x = 0;
    let fibArray = [0];

    if (num < 0) {
        return [];
    } 

    for (let i = 0; i < num - 1; i++) {

        xMinus2 = xMinus1
        
        xMinus1 = x

        x = xMinus2 + xMinus1

        fibArray.push(x);

    };

    return fibArray;

};

function fibsRec2(num) {

    let fibsArray = [];

    if (num < 1) {
        return fibsArray;
    } 

    if (num == 1) {
        return fibsArray = [0];
    } 

    if (num == 2) {
        return fibsArray = [1];
    }

    return fibsArray = [fibsRec2(num - 1)[0] + fibsRec2(num - 2)[0]];
    
};

function fibsRec3(num) {

    console.log("This was printed recursively");

    if (num < 1) {
        return [];
    } 

    if (num == 1) {
        return [0];
    } 

    return fibsRec3(num-1).concat(fibsRec2(num));
    
};

function fibsRec(num) {

    let fibsArray = [];

    if (num < 1) {
        return fibsArray;
    } 

    if (num == 1) {
        return fibsArray = [0];
    } 

    if (num == 2) {
        return fibsArray = [0,1];
    }

    fibsArray = [fibsRec(num - 1)[fibsRec(num - 1).length - 1] + fibsRec(num - 2)[fibsRec(num - 2).length - 1]];    

    return fibsRec(num-1).concat(fibsArray);
    
};

console.log(fibs(8));

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(4));
console.log(fibsRec(5));
console.log(fibsRec(6));
console.log(fibsRec(7));
console.log(fibsRec(8));
console.log(fibsRec(9));
console.log(fibsRec(10));
console.log(fibsRec(11));
console.log(fibsRec(12));
console.log(fibsRec(13));
console.log(fibsRec(14));
console.log(fibsRec(15));




