/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let youAre = "Students";
let age = 110;
youAre == "Children" && age < 10 ? console.log("free") : youAre == "Students" ? console.log("get 50% discount") : youAre == "Senior" && age >= 60 ? console.log("get 15% discount") : console.log("regular fare");