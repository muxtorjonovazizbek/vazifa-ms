// 81. Berilgan stringdagi yagona (takrorlanmaydigan) so'zlarni toping.

// function uniqueWords(s) {
//     let words = s.split(" ");
//     let wordCount = {};

    
//     words.forEach(word => {
//         wordCount[word] = (wordCount[word] || 0) + 1;
//     });
//     let uniqueWords = Object.keys(wordCount).filter(word => wordCount[word] === 1);
//     return uniqueWords;
// }

// // Test case
// console.log(uniqueWords("this is a test this is only a test")); // Output: ["only"]
// console.log(uniqueWords("hello world hello")); // Output: ["world"]


// 82. Berilgan objectdagi barcha qiymatlarni to'plab, bir massivda qaytaring.

// function collectValues(obj) {
//     let arr = [{value: obj, step: 1}]
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//     const {value, step} = arr[i]
//     for(let key in value) {
//         if (typeof value[key] === "object" ) {
//             arr.push({value: value[key], step: step + 1})
//         }else {
//             result.push(value[key])
//         }
//     }        
//     }
//     return result   
//  }
 
//  // Test case
//  const obj = {
//      a: 1,
//      b: {
//          c: 2,
//          d: {
//              e: 3,
//              f: {
//                  g: 4
//              }
//          }
//      }
//  };
//  console.log(collectValues(obj)); // Output: [1, 2, 3, 4]



// 83. Berilgan stringdagi har bir so'zning birinchi va oxirgi harfini o'zgartiring.

// function swapFirstLast(s) {
//     let arr = s.split(" ")

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > 1) {
//             let firstLet = arr[i][0];
//             let lastLet = arr[i][arr[i].length - 1];
//             arr[i] = lastLet + arr[i].slice(1, -1) + firstLet;
//         }
//     }
    
//     return arr.join(" ");
   
// }

// // Test case
// console.log(swapFirstLast("hello world")); // Output: "oellh dlorw"
// console.log(swapFirstLast("a quick brown fox")); // Output: "a kuicq nrowb fxo"



// 84. Berilgan raqamlar ro'yxatidagi eng katta elementning indeksini toping.

// function indexOfMax(arr) {
//     let max = arr[0]
//     let result = 0
//     for (let i = 0; i < arr.length; i++) {
//        if (max < arr[i]) {
//           max = arr[i]
//           result = i
//         }
        
//     }    
//     return result
// }
 
//  // Test case
//  console.log(indexOfMax([1, 3, 7, 1, 2, 5, 7])); // Output: 2


// 85. Berilgan raqamlar ro'yxatidagi barcha elementlarning kvadrat ildizlarini hisoblang.

// function sqrtElements(arr) {
//     arr.forEach(element => {
//         console.log(Math.sqrt(element)); 
//     });
//  }
 
//  // Test case
//  console.log(sqrtElements([1, 4, 9, 16, 25])); // Output: [1, 2, 3, 4, 5]


// 86. Berilgan raqamlar ro'yxatidagi juft va toq sonlarni alohida ro'yxatlar sifatida qaytaring.

// function separateEvenOdd(arr) {
//     let evenNum = []
//     let oddNum = []
//     arr.forEach(element => {
//        if (element % 2 == 0) {
//             evenNum.push(element)
//        }else {
//         oddNum.push(element)
//        }
//     });
//     console.log(evenNum);
//     console.log(oddNum);
//  }
 
//  // Test case
//  console.log(separateEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: { even: [2, 4, 6, 8], odd: [1, 3, 5, 7, 9]


//  87. Berilgan raqamlar ro'yxatidagi tub sonlarni toping.

// function findPrime(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         if (arr[i] > 1 && arr[i] % arr[i] == 0) {
//             console.log(arr[i]);
//         }
        
//     }
//  }
 
//  // Test case
//  console.log(findPrime([2, 3, 4, 5, 6, 7])); // Output: [2, 3, 5, 7]



// 88. Berilgan raqamlar ro'yxatidagi barcha elementlarni k qadam bosib aylanma tartibda o'ngga suring.

// function rotateArray(arr, k) {
//     for (let i = 0; i < k; i++) {
//         arr.unshift(arr.pop())
//     }
//     return arr
// }

// // Test case
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]


// 89. Berilgan raqamlar ro'yxatidagi o'rtacha qiymatni toping, faqat ikkita eng kichik va ikkita eng katta qiymatni hisobga olmasdan.

// function trimmedMean(arr) {
//     let total = 0
//     arr.forEach(element => {
//         total += element
//     });
//     console.log(total / arr.length);
// }

// // Test case
// console.log(trimmedMean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 5.5



// 90. Berilgan raqamlar ro'yxatidagi barcha polindrom sonlarni toping.


function isPalindrome(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}

function findPalindromes(arr) {
    let result = arr.filter(isPalindrome);
    return result;
}

// Test case
console.log(findPalindromes([121, 123, 202, 345, 454])); // Output: [121, 202, 454]

