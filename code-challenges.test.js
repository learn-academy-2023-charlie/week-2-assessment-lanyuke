// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// ----------------------------------------------------------------------------------
// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.


// a) Create a test with expect statements for each of the variables provided.

    // describe("numEvenDivi", () => {
    //     it("return if the number inside it is evenly divisible by three or not.", () => {
    //       expect(numEvenDivi(object1)).toEqual("15 is divisible by three"),
    //       expect(numEvenDivi(object2)).toEqual("0 is divisible by three"),
    //       expect(numEvenDivi(object3)).toEqual("-7 is not divisible by three")
    //     })
    //   })

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

    // Good fail:
    //   FAIL  week-2-assessment/code-challenges.test.js
    //   numEvenDivi
    //     ✕ return if the number inside it is evenly divisible by three or not. (2 ms)

    //   ● numEvenDivi › return if the number inside it is evenly divisible by three or not.

    //     ReferenceError: numEvenDivi is not defined

// Pseudo code:
    // input: object
    // output: return if the number inside it is evenly divisible by three or not.
    // process: create a function name: numEvenDivi
    // use object as parameter
    // use conditional operator if (object.number % 3 === 0) to return object.number is divisible by three
    // use conditional operator else to return object.number is not divisible by three
    // test pass.

// b) Create the function that makes the test pass.
    // const numEvenDivi = (object) => {
    //     if (object.number % 3 === 0) {
    //         return object.number + " is divisible by three";
    //     } else {
    //         return object.number + " is not divisible by three";
    //     }
    // }

    // PASS  week-2-assessment/code-challenges.test.js
    // numEvenDivi
    //   ✓ return if the number inside it is evenly divisible by three or not. (3 ms)


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.



// a) Create a test with expect statements for each of the variables provided.

    // describe("wordCap", () => {
    //     it("returns an array with all the words capitalized.", () => {
    //       expect(wordCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]),
    //       expect(wordCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    //     })
    //   })

// Good fail:
    //   FAIL  week-2-assessment/code-challenges.test.js
    //   wordCap
    //     ✕ returns an array with all the words capitalized.

    //   ● wordCap › returns an array with all the words capitalized.

    // //     ReferenceError: wordCap is not defined

//   const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]


// Pseudo code:
    // input: array
    // output: returns an array with all the words capitalized.
    // process: create a function name: wordCap
    // use array as parameter
    // return use .map method on array
    // declare using value and replace value with 
    // 0 index of value with .toUpperCase() method and also .substring() method starting on index 1 
    // test pass.

// // b) Create the function that makes the test pass.

    // const wordCap = (array) => {
    //     return array.map((value) => value[0].toUpperCase() + value.substring([1]))
    // }

// // Pass result:
    // PASS  week-2-assessment/code-challenges.test.js
    //   wordCap
    //     ✓ returns an array with all the words capitalized. (4 ms)

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

    // describe("firstVowel", () => {
    //     it("the index of the first vowel.", () => {
    //       expect(firstVowel(vowelTester1)).toEqual(1),
    //       expect(firstVowel(vowelTester2)).toEqual(0),
    //       expect(firstVowel(vowelTester3)).toEqual(2)
    //     })
    //   })

// Good Fail:
    // FAIL  week-2-assessment/code-challenges.test.js
    //   firstVowel
    //     ✕ the index of the first vowel. (3 ms)

    //   ● firstVowel › the index of the first vowel.

    //     ReferenceError: firstVowel is not defined


// const vowelTester1 = "learn"
// // Expected output: 1
// const vowelTester2 = "academy"
// // Expected output: 0
// const vowelTester3 = "challenges"
// // Expected output: 2

// // Pseudo code:
    // input: string
    // output: the index of the first vowel.
    // process: create a function name: firstVowel
    // create a new array: vowel = ["a", "e", "i", "o", "u"] in the function
    // then use for loop decalre starting point ; stop point; 
    // for (let i = 0; i < string.length; i++)
    // using conditional operator if
    // use.includes method with string[i] to do vowel check at each index
    // then return (i) for index of first vowel in the string
    // test to see if it pass.

// b) Create the function that makes the test pass.
    // const firstVowel = (string) => {
    //     const vowel = ["a", "e", "i", "o", "u"];
    //     for (let i = 0; i < string.length; i++) {
    //         if (vowel.includes(string[i])) {
    //             return (i)
    //         }
    //     }
    // }

// // Pass result:
    // PASS  week-2-assessment/code-challenges.test.js
    //   firstVowel
    //     ✓ the index of the first vowel. (6 ms)