// Ideal Order for writing Javascript:
//*define your utility functions first (formatFullName)
//*then you define event handler functions (formatAndDisplayName)
//*Set up event listeners
//IDEAL WAY TO APPROACH CODING as:
// all functions are defined before they're used in the event listeners. 
// it makes code readable and easy to maintain as this shows how I :
// define functions, then use them
// separate the function logic from the event binding
// readability--helps others understand what the functions do before seeing how they're connected to DOM events

function formatFullName(firstName, lastName) {
//check if either name is missing//
if (firstName == "" || lastName == "") {
  return "Invalid name input.";
}

//Capitalize the first letter of firstName//
//Take the first letter, make it uppercase, and add the rest in lowercase//
const firstNameCapitalized = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

//Capitalize the first letter of lastName//
const lastNameCapitalized = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

//Return in the format: lastName, firstName
return `${lastNameCapitalized}, ${firstNameCapitalized}`;
}

//Function to handle button clicks//
function formatAndDisplayName() {
  console.log("Button clicked");
  //Get Values form the input fields//
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  //Format the name//
  const result = formatFullName(firstName, lastName);

  //Display the result in the span//
  document.getElementById("result").textContent = result;

  }

   //Event Listener when DOM is completely loaded//
  document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded");
    //Get button element//
    const button = document.getElementById("formatButton");
    console.log("Button found:", button);

    // Add click listener to button
    button.addEventListener("click", formatAndDisplayName);
  });
  