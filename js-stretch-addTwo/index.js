// const numbers = [1, 2, 3, 4, 5];

// const addTwo = {
//   sumNums () {
//   for (let index = 0; index < numbers.length; index ++){
//     sumNums = numbers[index] + 2;
//   }
//   return sumNums 
// }
// }
// console.log(addTwo)

const addTwo = (numbers) => {
  const plusTwo = numbers.map((number) => {
    return number + 2;
  });
  console.log(plusTwo);
};

addTwo ([1, 2, 3, 4, 5]);