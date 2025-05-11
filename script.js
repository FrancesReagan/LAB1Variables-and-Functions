function formatFullName(firstName, lastName) {
//check if either name is missing
if (!firstName || !lastName) {
  return "Invalid name input.";
}

//Capitalize the first letter of each name
const formattedFirstName = firstName.charAt(0).toUppercase() + firstName.slice(1).toLowerCase();
const formattedLastName = lastName.charAt(0).toUppercase() + lastName.slice(1).toLowerCase();

//Return in the format: lastName, firstName
return `${formattedLastName}, ${formattedFristName}`;
}