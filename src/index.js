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

    console.log('Merging '+A+' and '+B);

    if (!B) {
        return A;
    }
    
    let C = []
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < A.length && j < B.length) {

        if (A[i] < B[j]) {

            // console.log(A[i]+'<'+B[j]);

            C[k++] = A[i++];

        } else {

            // console.log(B[j]+'<'+A[i]);
          
            C[k++] = B[j++];
  
        }

    }

    for (; i < A.length; i++) {

        C[k++] = A[i];

    }

    for (; j < B.length; j++) {

        C[k++] = B[j];

    }

    console.log('Merged result: '+C);
    return C;

}

// console.log(merge(myArrayA, myArrayB));
// console.log(merge([8]));
// console.log(merge([8], [2]));


let shortArray = [10, 5];

function sort(array) {

    let newArray = []

    if (array.length == 1) {
        return array;
    }

    array[0] > array[1] ? newArray.push(array[1], array[0]) : newArray.push(array[0], array[1]);

    return newArray;

};

// console.log(sort(shortArray));

let myArray = [6, 2, 5, 3, 8, 4, 1, 9];
// let myArray = [6, 2, 5, 3];
// let myArray = [6, 2];




function mergeSort(array) {

    let start = array.indexOf(array[0]);
    let end = array.length - 1;

    console.log('array: '+array);

    if (start < end)  {

        let mid = Math.floor((start+end)/2);
        let firstHalf = array.slice(start, mid+1);
        let secondHalf = array.slice(mid+1, end+1);

        console.log('firstHalf: '+firstHalf)
        console.log('secondHalf: '+secondHalf);

        firstHalf = mergeSort(firstHalf);
        secondHalf = mergeSort(secondHalf);

        console.log('New firstHalf: '+firstHalf)
        console.log('New secondHalf: '+secondHalf);

        return merge(firstHalf, secondHalf);

    } else {
        return array;
    }

};

console.log(mergeSort(myArray));
// console.log(merge([5],[3]));
// console.log(merge([6],[2]));
// console.log(merge(merge([6],[2]),merge([5],[3])));




