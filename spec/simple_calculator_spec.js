let myTest = require("../src/simple_calculator");
let add = myTest.add;
let multiply = myTest.multiply;


describe("add function", function () {
  it("should be able to add two positive numbers", function () {
    expect(add(1, 2)).toEqual(3);
  });

  it("should be able to add two negative numbers", function () {
    expect(add(-1, -1)).toEqual(-2);
  });

  it("should be able to add multiple numbers", function () {
    expect(add(1, 2, 3, 4, 5)).toEqual(15);
  });
});

describe("Multiply function", function () {
  it("should multiply two positive integers", function () {
    expect(multiply(1, 3)).toEqual(3);
  });

  it("should multiply two numbers, a negative and a positive", function () {
    expect(multiply(-1, 3)).toEqual(-3);
  });

  it("should multiply multiple integers", function () {
    expect(multiply(1, 2, 3, 4, 5)).toEqual(120);
  });
});