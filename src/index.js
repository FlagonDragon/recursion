import './styles.css';
// import fibsRec from './fibonacci.js'

console.log('AYO AYO!');

// console.log(fibsRec(8));

function merge2(arrayA, arrayB) {

    let copyA = arrayA.slice();
    let copyB = arrayB.slice();
    let newArray = []
    
    loopA: for (let i = 0; i < copyA.length; i++) {

        loopB: for (let j = 0; j < copyB.length; j++) {

            console.log(copyA[i]+','+copyB[j]);

            if (copyA[i] < copyB[j]) {

                newArray.push(copyA[i])

                break loopB;

            } else if (copyB[j] < copyA[i]) {

                newArray.push(copyB[j])
                copyB.shift();

                break loopB;

            } 

        }

    }

    return newArray;

};

let myArrayA = [3, 5, 8];
let myArrayB = [2, 4, 7];
   

function merge3(A, B) {

    let C = []
    let i = 0;
    let j = 0;

    while (i < A.length && j < B.length) {

        if (A[i] < B[j]) {

            console.log(A[i]+'<'+B[j]);

            C.push(A[i])

            i += 1

        } else {

            console.log(B[j]+'<'+A[i]);
          
            C.push(B[j])

            j += 1
  
        }

    }

    for (; i < A.length; i++) {

        C.push(A[i]);

    }

    for (; j < B.length; j++) {

        C.push(B[j]);

    }

    return C;

}


function merge(A, B) {

    let C = []
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < A.length && j < B.length) {

        if (A[i] < B[j]) {

            console.log(A[i]+'<'+B[j]);

            C[k++] = A[i++];

        } else {

            console.log(B[j]+'<'+A[i]);
          
            C[k++] = B[j++];
  
        }

    }

    for (; i < A.length; i++) {

        C[k++] = A[i];

    }

    for (; j < B.length; j++) {

        C[k++] = B[j];

    }

    return C;

}

console.log(merge(myArrayA, myArrayB));

let myArray = [10, 5];

function sort(array) {

    let newArray = []

    array[0] > array[1] ? newArray.push(array[1], array[0]) : newArray.push(array[0], array[1]);

    return newArray;

};

console.log(sort(myArray));


function mergeSort(array) {

    return array;

};

// console.log(mergeSort(myArray));


