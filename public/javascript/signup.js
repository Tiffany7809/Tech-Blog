//signup form submit
async function signupFormHandler(event) {

  event.preventDefault();


  const password = document.querySelector('#password-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();
 

  if (username && password) {
      const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({
              username,
              password
          }),
          headers: { 'Content-Type': 'application/json' }
      });


      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert("couldn't create new user");
      }
  }
};

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);