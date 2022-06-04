//signup form submit
async function signupFormHandler(event) {
  event.preventDefault();


  const pass = document.querySelector('#password-signup').value.trim();
  const userName = document.querySelector('#username-signup').value.trim();
 

  if (userName && password) {
      const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({
              userName,
              pass
          }),
          headers: { 'Content-Type': 'application/json' }
      });


      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert(response.statusText);
      }
  }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);