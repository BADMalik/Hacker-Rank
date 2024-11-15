// function lookupStudent(studentID) {
//     // function scope: BLUE(2)
//     console.log(1223)
//     var students = [
//         { id: 14, name: "Kyle" },
//         { id: 73, name: "Suzy" },
//         { id: 112, name: "Frank" },
//         { id: 6, name: "Sarah" }
//     ];

//     return function greetStudent(greeting){
//         // function scope: GREEN(3)

//         var student = students.find(
//             student => student.id == studentID
//         );

//         console.log( `${ greeting }, ${ student.name }!`);
//     };
// }

// var chosenStudents = [
//     lookupStudent(6),
//     lookupStudent(112)
// ];

// // accessing the function's name:
// chosenStudents[0].name;
// // greetStudent

// chosenStudents[0]("Hello");
// // Hello, Sarah!

// chosenStudents[1]("Howdy");

//IMPORTANT

// var keeps = [];

// console.log(i,sdd)
// for (var i = 0; i < 3; i++) {
//   console.log({ i });
//   var sdd = 123123
//   keeps[i] = function keepI() {
//     // closure over `i`
//     console.log(" cond ", i);
//     return i;
//   };
// }

// keeps[0](); // 3 -- WHY!?
// keeps[1](); // 3
// keeps[2](); // 3

// console.log(a)
// // var a = 2323
// // global.a = 232323223232
// function foo() {
//     var a = 123
//     console.log(this.a)

//     function bar() {
//         console.log(this.a)
//     }
//     bar() // Bind bar to foo's this context
// }

// foo.call({a: global.a}) // Call foo with global object as this
// function global() {
//     // this automatically created
//     // console.log(this)

//     const obj = {
//       name: "adawdawdw",
//       print() {
//         // this, automatically created
//         console.log(name)
//       },
//     }

//     obj.print()
//   }

//   global()

// console.log(this)

// const obj = {
//   name: "1312312312312",
//   print: function () {
//     console.log(this);

//     function print2() {
//       console.log(this.name);
//     }
//     print2.call(this)
//     // print2.call(this);
//   },
// };

// obj.print();

// let obj = {
//   name: "Object",
//   print: () => {
//     console.log(this);

//     const print2 = () => {
//       console.log(this.name);
//     };

//     return print2.call(obj);
//   },
// };

// console.log(obj.print());
// obj.call(obj).print();
//   obj.print().call(this)

const me = {
  name: "Dillion",
  age: 56,
  print: function () {
    function printName() {
      console.log(this.name);
    }
    printName.call(this);
    function printAge() {
      console.log(this.age);
    }
    printAge.call(this);
  },
};
me.print();

const me2 = {
  name: "Dillion",
  print: function () {
    function printName() {
      console.log(this.name);
    }
    printName.call(this);
  },
};
me2.print();

let obj = {
  name: "Object",
  print: (() => {
    console.log(this); // this will refer to `obj` if bound correctly

    const print2 = () => {
      console.log(this.name);
    };

    return print2();
  }).bind(obj), // Bind `obj` to the outer function
};

console.log(obj.print());

console.log(obj.print());

// function a() {
//   console.log(b)
//   var b = 123
// }

// a()
