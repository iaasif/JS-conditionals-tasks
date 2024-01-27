/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let result = 78;

result >= 90 && result <= 100 ? console.log("A") : result >= 80 && result <= 89 ? console.log("B") : result >= 70 && result <= 79 ? console.log("C") : result >= 60 && result <= 69 ? console.log("D") : result >= 0 && result <= 59 ? console.log("F") : console.log("out of range");
