// let object = {
//     info: {
//         name: "nasir",
//         age: 21,
//         gender: "male"
//     },
//     address: {
//         current: {
//             home: "Miargoan",
//             zipCode: 1620
//         }
//     }
// }

// let newObj = { ...object}
// newObj.info={...object.info}
// newObj.info.gender="not Interested"
// console.log(newObj)
// console.log(object)


// const arr = [2,9,4,8,6];
// const newArr = arr.filter((n) => n>= 4);
// console.log(newArr.sort().reverse().map((n) => n*2));


// function sendMessage(message) {
//     return new Promise((resolve, reject) => {

//         if(message === "dhaka"){
//             resolve();
//         }
//         else{
//             reject(new Error("nice try ! but you give wrong answer. Try Again..."))
//         }

//     })
// }


// const maxNum = ((nums) => nums.reduce((prev, curr) => prev > curr ? prev : curr))
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 45, 66, 86, 34, 23, 22, 55, 77, 99];
// let max;
// let prev;
// let curr;
// for (let i in nums) {
//     if (i < nums.length-1) {

//         if(i===0){
//             prev=null;
//             curr=nums[i];
//             max=curr;
//         }
//         prev=nums[i];
//         curr=nums[parseInt(i)+1];
//         if(prev>curr){
//             max=prev;
//         }
//         else{
//             max=curr
//         }


//     }
// }
// console.log(max)

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 45, 66, 86, 34, 23, 22, 55, 77, 99];
// let max=0;
// for(let i =0;i<nums.length;i++) {
//     if(nums[i]>max){
//         max=nums[i]
//     }

// }
// console.log(max)


// export const data = [
//     {id:1,text:"python",done:false},
//     {id:2,text:"javascript",done:true},
//     {id:3,text:"C++",done:false},
// ]

// const nextId = data.reduce((prev, curr) => {
//     return ( prev.id > curr.id ? prev.id : curr.id);
//   },0)+1;
//   console.log(nextId)

// console.log("object")

// let count = 1

// let intervalId = setInterval(() => {
//     console.log(`Hello ::${count}:: Times`)
//     count++;
//     if (count >= 20) {
//         clearInterval(intervalId);
//         console.log("Interval Stopped");
//     }
// }, 100)
// console.log(Date.now()/1000);