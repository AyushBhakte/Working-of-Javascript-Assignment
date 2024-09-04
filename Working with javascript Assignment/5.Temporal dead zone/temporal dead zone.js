{
    try {
        console.log(myVariable); // This will throw a ReferenceError
    } catch (e) {
        console.log(e); // Output: ReferenceError: Cannot access 'myVariable' before initialization
    }

    let myVariable = "I am inside the block scope";
    console.log(myVariable); // Output: I am inside the block scope
}
