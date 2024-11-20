fetch('/api/users/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstname: firstNameInput,
    lastname: lastNameInput,
    email: emailInput,
    password: passwordInput
  })
})
.then(response => response.json())
.then(result => {
  if (result.token) {
    localStorage.setItem('token', result.token);
    localStorage.setItem('user', JSON.stringify(result.user));
    navigateToHome();
  }
})
.catch(console.error);
