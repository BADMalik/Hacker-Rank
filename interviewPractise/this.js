// Implicit / Manual this invocation
// "use strict";

// // This is referenced to where its CALLED not where its referenced or assigned
var point = {
  x: null,
  y: null,

  init: function (x, y) {
    this.x = x;
    this.y = y;
    // console.log(this.x,this.y, x , y);
  },

  // initArrow :  (x,y) => {
  //     this.x = x;
  //     this.y = y;
  //     // console.log(this.x,this.y, x , y);
  // },
  rotate(angleRadians) {
    var rotatedX =
      this.x * Math.cos(angleRadians) - this.y * Math.sin(angleRadians);
    var rotatedY =
      this.x * Math.sin(angleRadians) + this.y * Math.cos(angleRadians);
    this.x = rotatedX;
    this.y = rotatedY;
  },
  toString() {
    return `(${this.x},${this.y})`;
  },
};

// point.init(3,4)// direct referecne call to object (returns assigned values )

// console.log({point})
// const init = point.init
// console.log(init(2,4))  // this doesnt work because
//The call-site for the function is init(3,4), which is different than point.init(3,4).
//When there's no implicit context (point.), nor any other kind of this assignment mechanism, the default context assignment occurs.
// will crash under strict mode

// proof/
// console.log({point, x : globalThis.x, y : globalThis.y})?
// globalThis.x;   // 3
// globalThis.y;   // 4
// point.x;        // null
// point.y;

// console.log(globalThis.x, point)
// with no strict mode this would return above values to global variables rather than point

// EXPLICIT / Manual this invocation =================================================

// var point = { /* .. */ };

// implicit example version
// const explicitInit = point.init;
// console.log(explicitInit(2,4))
// // explicitInit.call( point, 3, 4 );
// // or: init.apply( point, [ 3, 4 ] )
// console.log({point,x: globalThis.x,y: globalThis.y})

// point.x;        // 3
// point.y;        // 4

// explicit version
// var point = { /* .. */ };

// const init = point.init;

// // init.call( point, 3, 4 );
// or: init.apply( point, [ 3, 4 ] )

// point.x;        // 3
// point.y;        // 4

// console.log({point, x: globalThis.x, y: globalThis.y}) // globals would be undefined and point will have data

// var point = {
//     x: null,
//     y: null,

//     init(x,y) {
//         this.x = x;
//         this.y = y;
//     },
//     rotate(angleRadians) { /* .. */ },
//     toString() {
//         return `(${this.x},${this.y})`;
//     },
// };

// point.init(3,4);

// var anotherPoint = {};
// point.init.call( anotherPoint, 5, 6 );

// point.x;                // 3
// point.y;                // 4
// anotherPoint.x;         // 5
// anotherPoint.y;         // 6

// NEW CONTEXT INVOCATION

// var point = {
//     // ..

//     init: function() { /* .. */ }

//     // ..
// };

// var anotherPoint = new point.init(3,4);

// anotherPoint.x;     // 3
// anotherPoint.y;     // 4

// IMPORTANT =================================================================

function outer() {

    // define a return an "inner"
    // function
    var inner = () => {
        console.log(this.value);
        return this.value
    };
    console.log(this.value, this, inner());

    return inner;
}

var one = {
    value: 42,
};
var two = {
    value: "sad face",
};
// globalThis.value = 2323
// // var value = 123123
var innerFn = outer(one);
// // 42

// innerFn.call(two);
// // 42   <-- not "sad face"

// var point = {
//     // ..

//     init: function() { /* .. */ }

//     // ..
// };

// var anotherPoint = new point.init(3, 4);

// // anotherPoint.x;     // 3
// // anotherPoint.y;     // 4

// console.log({ anotherPoint });

// function whatsTheDealHere(id, defaultID = () => id) {
//   var id = 5;
//   console.log(defaultID());
// }

// whatsTheDealHere(3);

// var studentName = "Suzy";

// function printStudent(studentName) {
//     console.log(studentName);
// }

// printStudent.call(this,"Frank");

// var special = 42;

// function lookingFor(special = 3434313) {
//   console.log(special , "2");

//   // The identifier `special` (parameter) in this
//   // scope is shadowed inside keepLooking(), and
//   // is thus inaccessible from that scope.

//   function keepLooking() {

//     console.log(special, "4");
//      special = 3.141592;
//     console.log(special);
//   }

//   console.log(special, "1");

//   keepLooking();
//   console.log(special, "3");

// }

// lookingFor();
// 3.141592
// 42

// function something() {
//     var special = "JavaScript";

//     {
//         let special = 42;   // totally fine shadowing
//         console.log(special)

//         // ..
//     }
//     console.log(special)
// }

// function another() {
//     // ..

//     {   var special = "JavaScript";

//         // let special = "JavaScript";

//         {
//             // var special = "JavaScript";
//             // ^^^ Syntax Error

//             // ..
//         }
//     }
//     console.log(special)

// }

// something()
// another()

// var askQuestion = function ofTheTeacher() {
//     console.log(ofTheTeacher);
// };

// askQuestion();
// // function ofTheTeacher()...

// var studentName = "Kyle";

// function hello() {
//     console.log(`Hello, ${ this.studentName }!`);
// }

// hello();

// console.log(greeting)
// greeting();
// // TypeError

// var greeting = function greeting() {
//     console.log("Hello!");
// };
// // console.log(ofTheTeacher);

// var studentName = "Frank";
// console.log(studentName);   // Frank

// var studentName;
// console.log(studentName);   // Frank <--- still!

// // let's add the initialization explicitly
// console.log(studentName);
let studentName = "asdw";

// let studentName = "Suzy";

// askQuestion();
// // ReferenceError

// function askQuestion() {
//     console.log(`${ studentName }, do you know?`);
// }

// var studentName = "Kyle";

// {
//     console.log(studentName);
//     // ???

//     // ..

//     let studentName = "Suzy";

//     console.log(studentName);
//     // Suzy
// }
// function makeUser() {
//   let userObj = {
//     name: "John",
//   };
//   userObj.ref = userObj; // Manually set ref to the object itself
//   return userObj;
// }

// let user = makeUser();
// console.log(user.ref.name); // "John"
// function makeUser() {
//   return {
//     name: "John",
//     get ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();
// console.log(user); // "John"

var a = "a in global";
var obj1 = {
  a: "a in obj1",
  fn() {
    console.log(this.a);
  },
};
var obj2 = {
  a: "a in obj2",
  fn() {
    var innerFn = () => {
      console.log(this.a);
    };
    innerFn.call(obj2);
  },
};
obj1.fn(); // Outputs: a in global obj2.fn(); // Outputs: a in obj2
obj2.fn(); // Outputs: a in obj2

// function fn() {
// console.log(this);
// }
// fn();

// function makeUser() {
//   const obj = {
//     name: "John",
//   };
//   obj.ref = obj
//   return obj;
// }
// let user = makeUser();
// console.log(user.ref.name);
global.name = 123123
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user = makeUser();
console.log(user.ref.name);
