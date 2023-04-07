

// Define a function named binarySearch which accepts two parameters
// An array of numbers 'arr' and a target number 'target'
// The function returns either the index of target in the array or null if not found
function binarySearch(arr: number[], target: number): number | null {
    let lo = 0;
    let hi = arr.length;
  
    do{

        let  m = Math.floor(lo + (hi-lo)/2);
        let v = arr[m];

        if(v === target){
            return m;
        }else if(v > target){
            hi = m;
        }else {
            lo = m + 1
        }

       }while(lo < hi);
    
       return null;
  }
  
  const arr = [1, 9, 10, 13, 21];
  const target = 21;
  const result = binarySearch(arr, target);
  
  console.log(result);