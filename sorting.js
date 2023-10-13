const arr1 = [1,5,3,8,6,10,9,2]; 
  
function arrSort(arr) { 
    arr.sort((a,b)=>a-b); 
    arr.reverse(); 
    return arr; 
} 
  
console.log(arrSort(arr1)); 