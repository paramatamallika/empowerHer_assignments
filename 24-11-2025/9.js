// ================================
// 1. Template Literals + Expressions
// ================================
console.log(`5 + 7 = ${5 + 7}`);

const multiLine = `
This is line 1
This is line 2
This is line 3
`;
console.log(multiLine);

const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);


// ================================
// 2. Arrow Functions & this
// ================================

// a)
const square = n => n * n;
console.log(square(5));

// b)
const obj = {
  value: 50,
  test: () => console.log(this.value) // this does NOT refer to obj
};
obj.test(); // undefined

// Explanation:
// Arrow functions do NOT have their own "this". They take "this" from the surrounding scope.

// c) Fix using normal function
const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj2.test();


// ================================
// 3. Rest, Spread & Copying Objects
// ================================

// a) Shallow copy
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

// b) Merge two objects
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

// c) maxValue(...nums)
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(3, 10, 6));


// ================================
// 4. Destructuring & Optional Chaining
// ================================

// a)
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

// b)
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

// c)
const info = {};
console.log(info.data?.details?.value); // undefined safely


// ================================
// 5. Scoping (let/var/const)
// ================================

// a)
for (var i = 0; i < 3; i++) {}
console.log(i); // 3 (var is function scoped)

// b)
for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError: j is not defined

// c) Why const?
// const prevents reassignment and protects values that should not change.


// ================================
// 6. Ternary Operator – Practice
// ================================

// a)
let speed;
let kmph = 70;
speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

// b)
let age = 16;
console.log(age >= 18 ? "Adult" : "Minor");

// c) Pos/Zero/Neg using nested ternary
let num = -5;
let result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(result);


// ================================
// 7. Spread, Rest & Arrays
// ================================

// a)
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

// b)
const aArr = ["x", "y"];
const bArr = ["z"];
const combined = [...aArr, ...bArr];
console.log(combined);

// c)
const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));


// ================================
// 8. Object Destructuring & Shorthand
// ================================

// a)
const user1 = { id: 101, status: "active" };
const { id, status } = user1;
console.log(id, status);

// b) Shorthand
const id2 = 101;
const role = "admin";
const user2 = { id2, role };
console.log(user2);

// c) object with shorthand + method shorthand
const person = {
  name: "Sam",
  greet() {
    console.log("Hello!");
  }
};
person.greet();


// ================================
// 9. Template Literals (More Practice)
// ================================

// a)
console.log(`Today's date: ${new Date().toDateString()}`);

// b)
const NAME = "Alex";
const SCORE = 92;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// ================================
// 10. Arrow Function Shorthands
// ================================

// a) One-line addition
const add = (x, y) => x + y;
console.log(add(5, 6));

// b)
const isAdult = age => age >= 18;
console.log(isAdult(20));

// c)
const double = n => n * 2;
console.log(double(8));


// ================================
// 11. Spread Operator (Arrays & Objects)
// ================================

// a)
const arrClone = [...nums];
console.log(arrClone);

// b)
const arrAddBeginning = [100, ...nums];
console.log(arrAddBeginning);

// c)
const objA = { p: 1, q: 2 };
const objB = { q: 99, r: 3 };
const mergedObj = { ...objA, ...objB }; // q overridden
console.log(mergedObj);


// ================================
// 12. Optional Chaining (More Practice)
// ================================

const user3 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

// a)
console.log(user3.address?.city);

// b)
console.log(user3.job?.title); // undefined safe

// c) Example preventing runtime error
const data = {
  settings: null
};
console.log(data.settings?.theme); // undefined (NO ERROR)
