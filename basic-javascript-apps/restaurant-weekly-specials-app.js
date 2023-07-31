
// simple app for checking what's on special menu for each day of week.

var day;

/* Test cases */
//day = "Monday"; //expected result: "Chili Lime Tacos"
//day = "Tuesday"; //expected result: "Cauliflower Pizza"
//day = "Wednesday"; //expected result: "Hawaiian Hot Dogs"
//day = "Thursday"; //expected result: "Grilled Beet Burger"
//day = "Friday"; //expected result: "Sweet Potato Curry Falafel"
day = "Saturday"; //expected result: "No daily special today."
//day = "Sunday"; //expected result: "No daily special today."

switch(day){
  case 'Monday':
  console.log("Chili Lime Tacos");
  break;

  case 'Tuesday':
  console.log("Cauliflower Pizza");
  break;

  case 'Wednesday':
  console.log("Hawaiian Hot Dogs");
  break;

  case 'Thursday':
  console.log("Grilled Beet Burger");
  break;

  case 'Friday':
  console.log("Sweet Potato Curry Falafel");
  break;

  default:
  console.log("No daily special today.");
  break;
}
