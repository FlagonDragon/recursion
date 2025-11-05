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

console.log(fibs(3));

function fibsRec(num) {

    console.log(num);
    
}

