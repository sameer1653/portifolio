function signup() {
 
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Perform validation checks
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Please fill in all fields.');

        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }


    // Perform sign-up logic here (e.g., sending the data to the server for storage)
    var userData = {
        username: username,
        password: password
    };

    // Example: Save the data to local storage
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Sign-up successful!');
    window.location.href = 'index.html';
    // Redirect to another page or perform any additional actions upon successful sign-up
}