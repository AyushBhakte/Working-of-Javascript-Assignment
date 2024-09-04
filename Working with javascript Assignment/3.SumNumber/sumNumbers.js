function sumNumbers(a, b) {
    console.log(sum); // This will log 'undefined' due to hoisting

    var sum = a + b;
    return sum;
}

console.log(sumNumbers(5, 10)); // This will return 15
