//sum zero 


const a = [-4,2,3,-4,-5,5,23,0,1,9,-9];
const sortArr = a.sort((a,b) => a-b)
// [-9, -5, -4, -4, 0, 1,  2,  3,  5, 9, 23]

function findSumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left<right){
        sum = arr[left] + arr[right];
        if(sum === 0){
            return [ arr[left] , arr[right] ]
        }
        else if(sum > 0){
            right--;
        }
        else{
            left--;
        }
    }
}

const res = findSumZero(sortArr)
console.log(res)

//complexity -> o(n)  (linear)