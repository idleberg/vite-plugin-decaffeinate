let number = 42;
const opposite = true;
if (opposite) {
  number = -42;
}
const square = (x) => x * x;
const list = [1, 2, 3, 4, 5];
const math = {
  root: Math.sqrt,
  square,
  cube(x) {
    return x * square(x);
  }
};
const race = (winner, ...runners) => print(winner, runners);
if (typeof elvis !== "undefined" && elvis !== null) {
  alert("I knew it!");
}
const cubes = Array.from(list).map((num) => math.cube(num));
console.log("TypeScript");
