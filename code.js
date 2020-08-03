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

function isFive(x) {
    if (x === 5 || x === "5") {
        return true;
    }
    return false;
}

function isEven(x) {
    if (typeof x !== "boolean" && x % 2 === 0) {
        return true;
    }
    return false;
}

function isVowel(x) {
    if (typeof x === "string" && (x.toUpperCase() === "A" || x.toUpperCase() === "E" || x.toUpperCase() === "I" || x.toUpperCase() === "O" || x.toUpperCase() === "U")) {
        return true;
    }
    return false;
}

function add(x, y) {
    var result = parseFloat(x) + parseFloat(y);

    return result;
}