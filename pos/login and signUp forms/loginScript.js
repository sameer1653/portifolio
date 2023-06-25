
//LOGIN javaScript file start
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Perform login logic here (e.g., sending username and password to the server for validation)
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      window.location.href = 'index.html';
      // Redirect to another page or perform any additional actions upon successful login
    } else {
      alert('Invalid username or password. Please try again.');
      // Clear the input fields or perform any additional actions upon failed login
    }
  }
  //LOGIN JS END

 
  







