// a = 2;
// var a;
// console.log( a );

// var a;
// a = 2;
// console.log( a );
// foo(); // not ReferenceError, but TypeError!

// var foo = function bar() {
//   // ...
// };


const isValidParenthesis = (data) => {
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];
  for (let i = 0; i < data.length; i++) {
    console.log({stack , map : map[data[i]]})
    if (data[i] === "(" || data[i] === "{" || data[i] === "[") {
      stack.push(data[i]);
    } else if (map[data[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }
  console.log({rss : stack})
  return stack.length ? false : true;
};


console.log({res :isValidParenthesis("({{}}){}") })
// const isValid = (s) => {
//   const stack = [];

//   for (let i = 0; i < s.length; i += 1) {
//     const top = stack[stack.length - 1];

//     if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
//       stack.push(s[i]);
//     } else if (s[i] === ")" && top === "(" && stack.length !== 0) {
//       stack.pop();
//     } else if (s[i] === "]" && top === "[" && stack.length !== 0) {
//       stack.pop();
//     } else if (s[i] === "}" && top === "{" && stack.length !== 0) {
//       stack.pop();
//     } else {
//       return false;
//     }
//   }

//   return stack.length === 0;
// };
// const isValidWithMap = (s) => {
//   const stack = [];
//   const openSet = new Set(["(", "{", "["]);
//   const closeMap = new Map([
//     [")", "("],
//     ["}", "{"],
//     ["]", "["],
//   ]);

//   for (let i = 0; i < s.length; i += 1) {
//     if (openSet.has(s[i])) {
//       console.log({ set: s[i] });
//       stack.push(s[i]);
//     } else {
//       const pop = stack.pop();
//       console.log({ pop });
//       if (pop !== closeMap.get(s[i])) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };

// const a = {
//   a: 12312,
//   b: 123123,
//   c: {
//     d: 12323,
//   },
// };

// const z = { ...a };
// z.c.d = 232323232;
// console.log({ a, z });

// closures
// function foo() {
//   var a = 2;
//   function bar() {
//     console.log(a); // 2
//   }
//   bar();
// }
// foo();

// function foo() {
//   var a = 2;
//   const bar = () => {
//     console.log(a);
//   };
//   return bar;
// }
// var baz = foo();
// baz();

// var fn;
// function foo() {
//   var a = 2;
//   function baz() {
//     console.log(a);
//   }
//   fn = baz; // assign baz to global variable
// }
// function bar() {
//   fn(); // look ma, I saw closure!
// }
// foo();
// bar(); // 2

// this

// const obj = {
//   name: "deeecode",
//   age: 200,
//   //   print: function () {
//   //     const print2 = () => {
//   //       console.log(this); // 'this' refers to the global object
//   //     };
//   //     print2(); // regular function call, 'this' is the global object
//   //   }, prints { name: 'deeecode', age: 200, print: [Function: print] }

//   print: function () {
//     function print2() {
//       console.log(this); // 'this' refers to the global object
//     }
//     print2(); // regular function call, 'this' is the global object
//   },
// };

// obj.print(); // logs: Window {...} in a browser

// const obj = {
//   name: "deeecode",
//   age: 200,
//   print: function () {
//     function print2() {
//       console.log(this); // 'this' will refer to the 'obj' object
//     }

//     print2.call(this); // explicit binding, 'this' is the 'obj' object
//   },
// };

// obj.print(); // logs: {name: "deeecode", age: 200, print: ƒ}

// Create a couple of local variables in a function.
// function newScope() {
//   var name = "tim";
//   var age = 28;
// }
// // Try to access the local variables from the global scope
// // This will cause an error.
// name;

// var Person = {
//   name: "Tim",
//   age: 28,
//   greeting: () => {
//     return "Hello " + this.name + ".  Wow, you are " + this.age + " years old.";
//   },
// };

// var greeting = Person.greeting;
// console.log({ data: greeting() });

// var person = {
//   name: "Nathan",
//   skills: ["HTML", "CSS", "JavaScript"],

//   showSkills: function () {
//     // var self = this; // Store reference to "this"

//     this.skills.forEach(function (skill) {
//       console.log({ this: this });
//       console.log(this.name + " is skilled in " + skill);
//     });
//   },
// };
// https://www.freecodecamp.org/news/javascript-arrow-functions-in-depth/
// person.showSkills();

// const person = {
//   name: "Nathan",
//   skills: ["HTML", "CSS", "JavaScript"],
// to fix this use function
//   showSkills: () => {
//     this.skills.forEach((skill) => {
//       console.log(`${this.name} is skilled in ${skill}`);
//     });
//   },
// };

// person.showSkills();

//works with es6
// const person = {
//   name: "Nathan",
//   skills: ["HTML", "CSS", "JavaScript"],

//   showSkills: () => {
//     person.skills.forEach((skill) => {
//       console.log(`${person.name} is skilled in ${skill}`);
//     });
//   },
// };

// person.showSkills();

// Function that returns a promise
function asyncOperation(value) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      if (value) {
        resolve(`Success: ${value}`);
      } else {
        reject('Error: Value is falsy');
      }
    }, 1000);
  });
}

// Using promises for microtask and task queue learning purposes

// Microtask example
Promise.resolve()
  .then(() => console.log('Microtask 1'))
  .then(() => console.log('Microtask 2'));

// Task queue example
asyncOperation('Task Queue Example')
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Another microtask example
Promise.resolve()
  .then(() => console.log('Microtask 3'))
  .then(() => console.log('Microtask 4'));

// Output:
// Microtask 1
// Microtask 2
// Success: Task Queue Example
// Microtask 3
// Microtask 4





function flatten(ary) {
  return ary.reduce(function(a, b) {
    if (Array.isArray(b)) {
      return a.concat(flatten(b))
    }
    return a.concat(b)
  }, [])
}

Array.prototype.flatten = function() {
  var ret = [];
  for(var i = 0; i < this.length; i++) {
      if(Array.isArray(this[i])) {
          ret = ret.concat(this[i].flatten());
      } else {
          ret.push(this[i]);
      }
  }
  return ret;
};

function flatten(ary) {
  var ret = [];
  for(var i = 0; i < ary.length; i++) {
      if(Array.isArray(ary[i])) {
          ret = ret.concat(flatten(ary[i]));
      } else {
          ret.push(ary[i]);
      }
  }
  return ret;
}


function currySum( a) {
   
  return function (b) {
    
    if (b) {
      return currySum(a+b) 
    }
    return a
  }
} 

const currying = a => b => b ? currying(a+b) : a

const es6CurrySUm = (a) => (b) => b ? es6CurrySUm(a+b) : a
console.log({response : es6CurrySUm(2)(3)(4)()})


const data = [1,3, [[[4,3], 5,6], 7],[[[[[[53]]]]]]]


const flatten = array => array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])





















const flattenPractise = array => array.reduce((a,b) => a.concat(Array.isArray(b)? flattenPractise(b): b), []) 