import './styles.css';

console.log('AYO AYO!');

function fibonacci(num) {

    let xMinus2 = 0;
    let xMinus1 = 1;
    let x = 0;

    if (num < 0) {

        return 'OOPS';

    } else {

    for (let i = 1; i <= num; i++) {

        xMinus2 = xMinus1
        
        xMinus1 = x

        x = xMinus2 + xMinus1

    };

    return x;

    };

};

function fibs(num) {

    let fibArray = [];

    for (let i = 0; i < num; i++) {

        fibArray.push(fibonacci(i));

    }

    return fibArray;

}

console.log(fibs(8));

function fibsRec(num) {

    
}

