var customerAge;
var movieClubMember = false;
 /* Test cases */
//customerAge = 41; // expected result: $10
//customerAge = 20; // expected result: $6
//customerAge = "x"; // expected result: Invalid input.
//customerAge = 9; // expected result: $5
//customerAge = 68; // expected result: $7
//movieClubMember = true; // expected result: $0

 if (movieClubMember == true){
     console.log("$0");
 } else if (customerAge >= 65){
     console.log("$7");
 } else if (customerAge >= 25 && customerAge <= 64){
     console.log("$10");
 } else if (customerAge >= 14 && customerAge <= 24){
     console.log("$6");
 } else if (customerAge <= 13){
     console.log("5");
 } else {
     console.log("Invalid input.");
 }
