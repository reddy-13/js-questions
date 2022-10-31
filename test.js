// const arr = [4, 2, -1, 0, 3, 9, 1, -5];
const arr =  [1, 2, 3];


// method 1
const findSmallestMissing = (arr = []) => {
   let count = 1;
   if(!arr?.length){
      return count;
      console.log("inside if ", count);
   };
   while(arr.indexOf(count) !== -1){
       console.log("inside while b",count);
      count++;
      console.log("inside while a",count);
   };
   return count;
};
console.log(findSmallestMissing(arr));

// const findSmallestMissing = (arr =[] ) => {
//     let count =1;
//     if(!arr.length){
//         return count
//     }
//     return count
// }

// console.log(findSmallestMissing(arr));