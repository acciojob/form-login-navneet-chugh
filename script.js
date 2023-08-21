function getFormvalue() {
    //Write your code here
	const form = document.getElementById('myForm');
  const firstName = form.firstName.value;
  const lastName = form.lastName.value;

  if (firstName && lastName) {
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
  } else {
    alert("Please enter both First Name and Last Name.");
  }
}
// Add an event listener to the form to call the function on submission
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  getFormvalue();
});
