// // // Create a parent object
// // var tim = {
// //   name: "Tim Caswell",
// //   age: 28,
// //   isProgrammer: true,
// //   likesJavaScript: true,
// // };
// // // Create a child object
// // var jack = Object.create(tim);
// // // Override some properties locally
// // jack.name = "Jack Caswell";
// // jack.age = 4;
// // // Look up stuff through the prototype chain

// // console.log(jack.isProgrammer, tim);

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }
// Rectangle.prototype.getArea = function getArea() {
//   return this.width * this.height;
// };
// Rectangle.prototype.getPerimeter = function getPerimeter() {
//   return 2 * (this.width + this.height);
// };
// Rectangle.prototype.toString = function toString() {
//   return (
//     this.constructor.name + " a=" + this.getArea() + " p=" + this.getPerimeter()
//   );
// };

// function Square(side) {
//   this.width = side;
//   this.height = side;
// }
// // Make Square inherit from Rectangle
// Square.prototype = Object.create(Rectangle.prototype, {
//   constructor: { value: Square },
// });
// // Override a method
// Square.prototype.getPerimeter = function getPerimeter() {
//   return this.width * 4;
// };
// var rect = new Rectangle(6, 4);
// var sqr = new Square(5);
// console.log(rect.toString());
// console.log(sqr.toString());

//__proto__
// let animal = {
//     eats: true,
//     walk() {
//         console.log("Animal walk");
//     },
//     };

//     let rabbit = {
//     jumps: true,
//     __proto__: animal,
//     };

//     let longEar = {
//     earLength: 10,
//     __proto__: rabbit,
//     };

//     // walk is taken from the prototype chain
//     longEar.walk(); // Animal walk
//     console.log(longEar.walk()); // true (from rabbit)

// getters and setters
let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    console.log("sdawd");
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    console.log("sdawd");
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

// console.log(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

// console.log(admin.fullName); // Alice Cooper, state of admin modified
// console.log(user.fullName); // John Smith, state of user protected
