  function Form(event) {
    event.preventDefault();
    var nameValue = document.getElementById("name").value;
    var emailValue = document.getElementById("email").value;
    var errorMessage = document.getElementById("errorMessage");

    if (nameValue === '' || emailValue === '') {
      errorMessage.textContent = 'Please fill in all required information.';
    } else {

      errorMessage.textContent = '';

      alert('Form submitted successfully!');
    }
  }