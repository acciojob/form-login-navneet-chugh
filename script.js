function getFormvalue() {
    const form = document.getElementById('form1');
    const firstName = form.fname.value;
    const lastName = form.lname.value;

    if (firstName && lastName) {
        alert(firstName + lastName);
    } else {
        alert("Please enter both First Name and Last Name.");
    }
}

// Add an event listener to the form to call the function on submission
document.getElementById('form1').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    getFormvalue();
});
