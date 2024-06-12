// Require function assertEqual
const assertEqual = require("../assertEqual");

//Require function head
const head = require("../head");

// Test Code for head function
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([10]), 9);
assertEqual(head([10]), undefined);