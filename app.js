var combine = function (input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-Number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var totalAge = combine(30, 20, "as-Number");
console.log(totalAge);
var totalStringAge = combine("30", "20", "as-String");
console.log(totalStringAge);
var fullName = combine("Rita", "Mary", "as-String");
console.log(fullName);
