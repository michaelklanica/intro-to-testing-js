// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// const helloWorld = function() {
//     return "Hello, World!";
// }

function sayHello(input) {
    if (typeof input === "string" && input !== "" && !parseFloat(input)) {
        return "Hello, " + input;
    }
    return "Hello, World";
}

function isFive() {

}