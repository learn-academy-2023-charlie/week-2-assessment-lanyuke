// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Charlie 2023"
// console.log(cohort.split(""))

// a) Your answer:
  // ["C", "h", "a", "r", "l", "i", "e", " ", "2", "0", "2", "3"]
// b) Verify and explain: return:
  // ['C', 'h', 'a', 'r', 'l', 'i', 'e', ' ', '2', '0', '2', '3'],
  // I was correct because a space does take an index so when using split method to trun string into an array, 
  // every character including space will have quotation mark with it.

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// // }

// console.log(greeter("LEARN Student"))

// a) Your answer:
  // it will log nothing
// b) Verify and explain: 
  // return:undefined, 
  // I was close because this function doesn't have return in it.
  // // working code will be:
  // const greeter = (name) => {
  //   return `Hello, ${name}!`
  //  }

// --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: 
  // undefine
// b) Verify and explain:return:
  // [ 8, 10, 12, 14, 16 ]
  // I was wrong because I forgot in high order funtion => is short for returning value.

// --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:
  // [12, 14]
// b) Verify and explain:return: 
  // [11, 13, 15],
  // I was wrong because I forgot filter method are returning what ever is after arrow function.

// --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer:
  // "JacaScript"
// b) Verify and explain: 
  // JavaScript, 
  // I was correct because using . notation on object with index value [0] for languages is JavaScript.

// --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "Charlie"
//     this.year = 2023
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:
  // class
// b) Verify and explain: return: 
  // Learn { student: 'George', cohort: 'Charlie', year: 2023 }
  // I was wrong because I forgot how class returns it's value.
  // By using new Learn() we can fill in the name becasue we have name in the constructor in class Learn