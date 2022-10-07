// Type aliasses
type numStr = number | string;
type literal = "as-Number" | "as-String";

const combine = (input1: numStr, input2: numStr, resultConversion: literal) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-Number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const totalAge = combine(30, 20, "as-Number");
console.log(totalAge);

const totalStringAge = combine("30", "20", "as-String");
console.log(totalStringAge);

const fullName = combine("Rita", "Mary", "as-String");
console.log(fullName);
