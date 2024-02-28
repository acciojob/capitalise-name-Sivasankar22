//your JS code here. If required.
const inputField = document.getElementById('fname');

// Add event listener to the input field for the blur event
inputField.addEventListener('blur', function() {
    // Convert the content of the input field to uppercase
    this.value = this.value.toUpperCase();
});