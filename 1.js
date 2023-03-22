//sum zero 

const a = [-4,2,3,-4,-5,5,23,0,1,9,-9];
const sortArr = a.sort((a,b) => a-b)
// [-9, -5, -4, -4, 0, 1,  2,  3,  5, 9, 23]

function getSumPairZero(arr){
    for(let num of arr){
        console.log("outer")
        for(j=1;j<arr.length;j++){
            console.log("inner")
            if(num + arr[j] === 0){
                return [num,a[j]];
            }
        }
    }
}

const res = getSumPairZero(sortArr)
console.log(res)

//complexity -> o(n2)  (quadratic)