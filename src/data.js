const data = {
    react: [
        {
          id: 'q1',
          text: 'Which of the following definitions best describes React.js?',
          answers: [
            {
              id: 'a1',
              ans: 'A library to build user interfaces with help of declarative code.',
            },
            {
              id: 'a2',
              ans: 'A library for managing state in web applications.',
            },
            {
              id: 'a3',
              ans: 'A framework to build user interfaces with help of imperative code.',
            },
            {
              id: 'a4',
              ans: 'A library used for building mobile applications only.',
            },
          ],
        },
        {
          id: 'q2',
          text: 'What purpose do React hooks serve?',
          answers: [
            {
              id: 'a1',
              ans: 'Enabling the use of state and other React features in functional components.',
            },
            {
              id: 'a2',
              ans: 'Creating responsive layouts in React applications.',
            },
            {
              id: 'a3',
              ans: 'Handling errors within the application.',
            },
            {
              id: 'a4',
              ans: 'Part of the Redux library for managing global state.',
            }
          ],
        },
        {
          id: 'q3',
          text: 'Can you identify what JSX is?',
          answers: [
            {
              id: 'a1',
              ans: 'A JavaScript extension that adds HTML-like syntax to JavaScript.',
            },
            {
              id: 'a2',
              ans: 'A JavaScript library for building dynamic user interfaces.',
            },
            {
              id: 'a3',
              ans: 'A specific HTML version that was explicitly created for React.',
            },
            {
              id: 'a4',
              ans: 'A tool for making HTTP requests in a React application.',
            }
          ],
        },
        {
          id: 'q4',
          text: 'What is the most common way to create a component in React?',
          answers: [
            {
              id: 'a1',
              ans: 'By defining a JavaScript function that returns a renderable value.',
            },
            {
              id: 'a2',
              ans: 'By defining a custom HTML tag in JavaScript.',
            },
            {
              id: 'a3',
              ans: 'By creating a file with a .jsx extension.',
            },
            {
              id: 'a4',
              ans:  'By using the "new" keyword followed by the component name.',
            }
          ],
        },
        {
          id: 'q5',
          text: 'What does the term "React state" imply?',
          answers: [
            {
              id: 'a1',
              ans:  'An object in a component that holds values and may cause the component to render on change.',
            },
            {
              id: 'a2',
              ans: 'The lifecycle phase a React component is in.',
            },
            {
              id: 'a3',
              ans: 'The overall status of a React application, including all props and components.',
            },
            {
              id: 'a4',
              ans:   'A library for managing global state in React applications.',
            }
          ],
        }
    ],
    java: [
        {
          id: 'q1',
          text: 'What is the primary purpose of the public static void main(String[] args) method in Java?',
          answers: [
            {
              id: 'a1',
              ans:  'It serves as the entry point for the Java application, where the program begins execution.',
            },
            {
              id: 'a2',
              ans: 'It defines a class default constructor.',
            },
            {
              id: 'a3',
              ans:  'It is used to handle exceptions in the program.',
            },
            {
              id: 'a4',
              ans:  'It specifies the main configuration settings for a Java application.'
            }
          ],
        },
        {
          id: 'q2',
          text: 'What does the final keyword do when applied to a variable in Java?',
          answers: [
            {
              id: 'a1',
              ans: 'It makes the variables value immutable once it has been assigned.',
            },
            {
              id: 'a2',
              ans: 'It allows the variable to be modified only within the same class.',
            },
            {
              id: 'a3',
              ans:  'It indicates that the variable can be used across multiple classes.',
            },
            {
              id: 'a4',
              ans: 'It marks the variable as deprecated in future versions of the software.'
            }
          ],
        },
        {
          id: 'q3',
          text: 'What is the function of the try block in Java exception handling?',
          answers: [
            {
              id: 'a1',
              ans: 'It contains code that might throw an exception and needs to be monitored.',
            },
            {
              id: 'a2',
              ans: 'It defines the method signature for handling exceptions.',
            },
            {
              id: 'a3',
              ans: 'It initializes the variables that will be used in exception handling.',
            },
            {
              id: 'a4',
              ans: 'It specifies the location of the error log files.'
            }
          ],
        },
        {
          id: 'q4',
          text: 'What does the extends keyword indicate in a Java class declaration?',
          answers: [
            {
              id: 'a1',
              ans:  'The class is inheriting from a parent class.',
            },
            {
              id: 'a2',
              ans: 'The class implements multiple interfaces.',
            },
            {
              id: 'a3',
              ans: 'The class is defining a new data type.',
            },
            {
              id: 'a4',
              ans: 'The class is intended for internal use only.'
            }
          ],
        },
        {
          id: 'q5',
          text: 'What is the role of the hashCode() method in Java?',
          answers: [
            {
              id: 'a1',
              ans:   'It provides a unique integer identifier for an object, used in hashing data structures.',
            },
            {
              id: 'a2',
              ans: 'It returns a string representation of the objects state.',
            },
            {
              id: 'a3',
              ans: 'It determines the size of the object in memory.',
            },
            {
              id: 'a4',
              ans:  'It clones the object to create a copy.'
            }
          ],
        }
    ],
    c: [
        {
          id: 'q1',
          text: 'What is the purpose of the main function in a C program?',
          answers: [
            {
              id: 'a1',
              ans: 'It serves as the entry point for program execution.',
            },
            {
              id: 'a2',
              ans: 'It initializes global variables before program execution.',
            },
            {
              id: 'a3',
              ans: 'It handles input and output operations for the program.',
            },
            {
              id: 'a4',
              ans: 'It manages memory allocation for dynamic data.'
            }
          ],
        },
        {
          id: 'q2',
          text: 'What does the static keyword signify when applied to a variable in C?',
          answers: [
            {
              id: 'a1',
              ans: 'The variable retains its value between function calls and has internal linkage.',
            },
            {
              id: 'a2',
              ans: 'The variable is only accessible within the current function.',
            },
            {
              id: 'a3',
              ans: 'The variables value is shared across multiple functions.',
            },
            {
              id: 'a4',
              ans: 'The variable can be used to dynamically allocate memory.'
            }
          ],
        },
        {
          id: 'q3',
          text: 'What is the result of using the & operator in C?',
          answers: [
            {
              id: 'a1',
              ans: 'It returns the address of a variable (address-of operator).',
            },
            {
              id: 'a2',
              ans:  'It performs a bitwise AND operation between two integers.',
            },
            {
              id: 'a3',
              ans: 'It combines two strings into one.',
            },
            {
              id: 'a4',
              ans: 'It increments the value of a variable by one.'
            }
          ],
        },
        {
          id: 'q4',
          text: 'What is the purpose of the return statement in a C function?',
          answers: [
            {
              id: 'a1',
              ans: 'It exits the function and optionally returns a value to the caller.',
            },
            {
              id: 'a2',
              ans:  'It transfers control to the next function in the program sequence.',
            },
            {
              id: 'a3',
              ans: 'It handles exceptions or errors that occur during function execution.',
            },
            {
              id: 'a4',
              ans:  'It prints the functions result to the standard output.'
            }
          ],
        },
        {
          id: 'q5',
          text: 'What does the malloc function do in C?',
          answers: [
            {
              id: 'a1',
              ans: 'It allocates a specified amount of memory dynamically and returns a pointer to it.',
            },
            {
              id: 'a2',
              ans:  'It deallocates previously allocated memory.',
            },
            {
              id: 'a3',
              ans: 'It initializes a block of memory with a specified value.',
            },
            {
              id: 'a4',
              ans: 'It prints the size of a memory block to the standard output.'
            }
          ],
        }
    ],
}

export default data;