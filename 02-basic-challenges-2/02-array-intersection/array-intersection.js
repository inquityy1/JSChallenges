// function arrayIntersection(arr1, arr2) {
//   const intersectionArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let k = 0; k < arr2.length; k++) {
//       if (arr1[i] === arr2[k] && !intersectionArr.includes(arr2[k])) {
//         intersectionArr.push(arr2[k]);
//       }
//     }
//   }

//   return intersectionArr;
// }

function arrayIntersection(arr1, arr2) {
  const intersectionArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersectionArr.includes(arr1[i])) {
      intersectionArr.push(arr1[i]);
    }
  }

  return intersectionArr;
}

module.exports = arrayIntersection;
