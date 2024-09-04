{
    // Attempting to log the values before they are declared
    try {
        console.log(letVariable); // ReferenceError
    } catch (e) {
        console.log(e); // Output: ReferenceError: Cannot access 'letVariable' before initialization
    }

    try {
        console.log(constVariable); // ReferenceError
    } catch (e) {
        console.log(e); // Output: ReferenceError: Cannot access 'constVariable' before initialization
    }

    console.log(varVariable); // Output: undefined due to hoisting

    // Variable declarations
    let letVariable = "I am a let variable";
    var varVariable = "I am a var variable";
    const constVariable = "I am a const variable";

    // Logging the values after declaration
    console.log(letVariable); // Output: I am a let variable
    console.log(varVariable); // Output: I am a var variable
    console.log(constVariable); // Output: I am a const variable
}
