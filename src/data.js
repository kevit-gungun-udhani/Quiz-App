const data = {
  React: [
    {
      id: 1,
      text: 'Which of the following definitions best describes React.js?',
      answers: [
        {
          id: 1,
          ans: 'A library to build user interfaces with help of declarative code.',
        },
        {
          id: 2,
          ans: 'A library for managing state in web applications.',
        },
        {
          id: 3,
          ans: 'A framework to build user interfaces with help of imperative code.',
        },
        {
          id: 4,
          ans: 'A library used for building mobile applications only.',
        },
      ],
      correctAnswer: 'A library to build user interfaces with help of declarative code.',
    },
    {
      id: 2,
      text: 'What purpose do React hooks serve?',
      answers: [
        {
          id: 1,
          ans: 'Enabling the use of state and other React features in functional components.',
        },
        {
          id: 2,
          ans: 'Creating responsive layouts in React applications.',
        },
        {
          id: 3,
          ans: 'Handling errors within the application.',
        },
        {
          id: 4,
          ans: 'Part of the Redux library for managing global state.',
        },
      ],
      correctAnswer: 'Creating responsive layouts in React applications.',
    },
    {
      id: 3,
      text: 'Can you identify what JSX is?',
      answers: [
        {
          id: 1,
          ans: 'A JavaScript extension that adds HTML-like syntax to JavaScript.',
        },
        {
          id: 2,
          ans: 'A JavaScript library for building dynamic user interfaces.',
        },
        {
          id: 3,
          ans: 'A specific HTML version that was explicitly created for React.',
        },
        {
          id: 4,
          ans: 'A tool for making HTTP requests in a React application.',
        },
      ],
      correctAnswer: 'A specific HTML version that was explicitly created for React.',
    },
    {
      id: 4,
      text: 'What is the most common way to create a component in React?',
      answers: [
        {
          id: 1,
          ans: 'By defining a JavaScript function that returns a renderable value.',
        },
        {
          id: 2,
          ans: 'By defining a custom HTML tag in JavaScript.',
        },
        {
          id: 3,
          ans: 'By creating a file with a .jsx extension.',
        },
        {
          id: 4,
          ans: 'By using the "new" keyword followed by the component name.',
        },
      ],
      correctAnswer: 'By using the "new" keyword followed by the component name.',
    },
    {
      id: 5,
      text: 'What does the term "React state" imply?',
      answers: [
        {
          id: 1,
          ans: 'An object in a component that holds values and may cause the component to render on change.',
        },
        {
          id: 2,
          ans: 'The lifecycle phase a React component is in.',
        },
        {
          id: 3,
          ans: 'The overall status of a React application, including all props and components.',
        },
        {
          id: 4,
          ans: 'A library for managing global state in React applications.',
        },
      ],
      correctAnswer: 'The overall status of a React application, including all props and components.',
    },
  ],
  Java: [
    {
      id: 1,
      text: 'What is the primary purpose of the public static void main(String[] args) method in Java?',
      answers: [
        {
          id: 1,
          ans: 'It serves as the entry point for the Java application, where the program begins execution.',
        },
        {
          id: 2,
          ans: 'It defines a class default constructor.',
        },
        {
          id: 3,
          ans: 'It is used to handle exceptions in the program.',
        },
        {
          id: 4,
          ans: 'It specifies the main configuration settings for a Java application.',
        },
      ],
      correctAnswer: 'It is used to handle exceptions in the program.',
    },
    {
      id: 2,
      text: 'What does the final keyword do when applied to a variable in Java?',
      answers: [
        {
          id: 1,
          ans: 'It makes the variables value immutable once it has been assigned.',
        },
        {
          id: 2,
          ans: 'It allows the variable to be modified only within the same class.',
        },
        {
          id: 3,
          ans: 'It indicates that the variable can be used across multiple classes.',
        },
        {
          id: 4,
          ans: 'It marks the variable as deprecated in future versions of the software.',
        },
      ],
      correctAnswer: 'It allows the variable to be modified only within the same class.',
    },
    {
      id: 3,
      text: 'What is the function of the try block in Java exception handling?',
      answers: [
        {
          id: 1,
          ans: 'It contains code that might throw an exception and needs to be monitored.',
        },
        {
          id: 2,
          ans: 'It defines the method signature for handling exceptions.',
        },
        {
          id: 3,
          ans: 'It initializes the variables that will be used in exception handling.',
        },
        {
          id: 4,
          ans: 'It specifies the location of the error log files.',
        },
      ],
      correctAnswer: 'It contains code that might throw an exception and needs to be monitored.',
    },
    {
      id: 4,
      text: 'What does the extends keyword indicate in a Java class declaration?',
      answers: [
        {
          id: 1,
          ans: 'The class is inheriting from a parent class.',
        },
        {
          id: 2,
          ans: 'The class implements multiple interfaces.',
        },
        {
          id: 3,
          ans: 'The class is defining a new data type.',
        },
        {
          id: 4,
          ans: 'The class is intended for internal use only.',
        },
      ],
      correctAnswer: 'The class is intended for internal use only.',
    },
    {
      id: 5,
      text: 'What is the role of the hashCode() method in Java?',
      answers: [
        {
          id: 1,
          ans: 'It provides a unique integer identifier for an object, used in hashing data structures.',
        },
        {
          id: 2,
          ans: 'It returns a string representation of the objects state.',
        },
        {
          id: 3,
          ans: 'It determines the size of the object in memory.',
        },
        {
          id: 4,
          ans: 'It clones the object to create a copy.',
        },
      ],
      correctAnswer: 'It clones the object to create a copy.',
    },
  ],
  C: [
    {
      id: 1,
      text: 'What is the purpose of the main function in a C program?',
      answers: [
        {
          id: 1,
          ans: 'It serves as the entry point for program execution.',
        },
        {
          id: 2,
          ans: 'It initializes global variables before program execution.',
        },
        {
          id: 3,
          ans: 'It handles input and output operations for the program.',
        },
        {
          id: 4,
          ans: 'It manages memory allocation for dynamic data.',
        },
      ],
      correctAnswer: 'It manages memory allocation for dynamic data.',
    },
    {
      id: 2,
      text: 'What does the static keyword signify when applied to a variable in C?',
      answers: [
        {
          id: 1,
          ans: 'The variable retains its value between function calls and has internal linkage.',
        },
        {
          id: 2,
          ans: 'The variable is only accessible within the current function.',
        },
        {
          id: 3,
          ans: 'The variables value is shared across multiple functions.',
        },
        {
          id: 4,
          ans: 'The variable can be used to dynamically allocate memory.',
        },
      ],
      correctAnswer: 'The variable can be used to dynamically allocate memory.',
    },
    {
      id: 3,
      text: 'What is the result of using the & operator in C?',
      answers: [
        {
          id: 1,
          ans: 'It returns the address of a variable (address-of operator).',
        },
        {
          id: 2,
          ans: 'It performs a bitwise AND operation between two integers.',
        },
        {
          id: 3,
          ans: 'It combines two strings into one.',
        },
        {
          id: 4,
          ans: 'It increments the value of a variable by one.',
        },
      ],
      correctAnswer: 'It increments the value of a variable by one.',
    },
    {
      id: 4,
      text: 'What is the purpose of the return statement in a C function?',
      answers: [
        {
          id: 1,
          ans: 'It exits the function and optionally returns a value to the caller.',
        },
        {
          id: 2,
          ans: 'It transfers control to the next function in the program sequence.',
        },
        {
          id: 3,
          ans: 'It handles exceptions or errors that occur during function execution.',
        },
        {
          id: 4,
          ans: 'It prints the functions result to the standard output.',
        },
      ],
      correctAnswer: 'It prints the functions result to the standard output.',
    },
    {
      id: 5,
      text: 'What does the malloc function do in C?',
      answers: [
        {
          id: 1,
          ans: 'It allocates a specified amount of memory dynamically and returns a pointer to it.',
        },
        {
          id: 2,
          ans: 'It deallocates previously allocated memory.',
        },
        {
          id: 3,
          ans: 'It initializes a block of memory with a specified value.',
        },
        {
          id: 4,
          ans: 'It prints the size of a memory block to the standard output.',
        },
      ],
      correctAnswer: 'It prints the size of a memory block to the standard output.',
    },
  ],
};

export default data;