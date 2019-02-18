let QuizQuestions = [
  {
    questionId: 1,
    question: "Q1: Everything in React is a ________",
    answerOptions: [
      { id: 1, value: 0, content: "Module" },
      { id: 2, value: 1, content: "Component" },
      { id: 3, value: 0, content: "Package" },
      { id: 4, value: 0, content: "Class" }
    ],
    explanation: "The right answer is Component"
  },
  {
    questionId: 2,
    question: "Q2: What language defines the behavior of a web page?",
    answerOptions: [
      { id: 5, value: 0, content: "HTML" },
      { id: 6, value: 0, content: "CSS" },
      { id: 7, value: 1, content: "Java Script" },
      { id: 8, value: 0, content: "XML" }
    ],
    explanation: "Canberra is the capital and was founded in 1901"
  },
  {
    questionId: 3,
    question: "Q3: How to append a value to an array in JavaScript?",
    answerOptions: [
      { id: 9, value: 0, content: "arr[arr.length*1]" },
      { id: 10, value: 0, content: "arr[arr.length-1]" },
      { id: 11, value: 0, content: "arr[arr.length+1] = new Arrays()" },
      { id: 12, value: 1, content: "arr[arr.length] = value" }
    ],
    explanation: "The right answer is Module"
  },
  {
    questionId: 4,
    question: "Q4: What is state in React?",
    answerOptions: [
      { id: 13, value: 0, content: "A persistant storage." },
      {
        id: 14,
        value: 1,
        content: "An internal data store (object) of a component."
      },
      { id: 15, value: 1, content: "Is an component" },
      { id: 16, value: 0, content: "Is a child of prop" }
    ],
    explanation: "State is an internal data store (object) of a component."
  },
  {
    questionId: 5,
    question: "Q5: What is Babel?",
    answerOptions: [
      { id: 17, value: 1, content: "A transpiler." },
      { id: 18, value: 0, content: "An interpreter" },
      { id: 19, value: 0, content: "A Compiler" },
      { id: 20, value: 0, content: "Both Compiler and Transpilar" }
    ],
    explanation: "Babel is Both Compiler and Transpilar"
  },
  {
    questionId: 6,
    question: "Q6: What is the capital of Australia?",
    answerOptions: [
      { id: 21, value: 0, content: "Melboune" },
      { id: 22, value: 0, content: "Sydney" },
      { id: 23, value: 1, content: "Canberra" },
      { id: 24, value: 0, content: "Brisbane" }
    ],
    explanation: "Canberra is the capital and was founded in 1901"
  },
  {
    questionId: 7,
    question: "Q7: Everything in React is a ________",
    answerOptions: [
      { id: 25, value: 1, content: "Module" },
      { id: 26, value: 0, content: "Component" },
      { id: 27, value: 0, content: "Package" },
      { id: 28, value: 0, content: "Class" }
    ],
    explanation: "The right answer is Module"
  },
  {
    questionId: 8,
    question: "Q8: What is the capital of Australia?",
    answerOptions: [
      { id: 29, value: 0, content: "Melboune" },
      { id: 30, value: 0, content: "Sydney" },
      { id: 31, value: 1, content: "Canberra" },
      { id: 32, value: 0, content: "Brisbane" }
    ],
    explanation: "Canberra is the capital and was founded in 1901"
  },
  {
    questionId: 9,
    question: "Q9: Everything in React is a ________",
    answerOptions: [
      { id: 33, value: 1, content: "Module" },
      { id: 34, value: 0, content: "Component" },
      { id: 35, value: 0, content: "Package" },
      { id: 36, value: 0, content: "Class" }
    ],
    explanation: "The right answer is Module"
  },
  {
    questionId: 10,
    question: "Q10: What is the capital of Australia?",
    answerOptions: [
      { id: 37, value: 0, content: "Melboune" },
      { id: 38, value: 0, content: "Sydney" },
      { id: 39, value: 1, content: "Canberra" },
      { id: 40, value: 0, content: "Brisbane" }
    ],
    explanation: "Canberra is the capital and was founded in 1901"
  }
];

localStorage.setItem("name", "claudio");
export default QuizQuestions;
