"use strict";
// Create a function called greet.
// This function should accept a required name (string) and an optional greeting message (string).
// If no greeting is provided, use "Hello" as the default message.
// The function should log the greeting message followed by the name. Specify the correct return type for logging.
function greet(name, message) {
    if ((message === null || message === void 0 ? void 0 : message.length) === 0) {
        console.log(`Hello, ${name}`);
    }
    else {
        console.log(`${message}, ${name}`);
    }
}
greet("John"); // Expected output: Hello, John!
greet("John", "Good morning"); // Expected output: Good morning, John!
