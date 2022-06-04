//Adding a new Post

async function newFormHandler(event) {
  event.preventDefault();


  const content = document.querySelector('input[name="content"]').value;
  const title = document.querySelector('input[name="post-title"]').value;
  
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });


//redirect to the dashboard and show new post
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

//listening for button click on submit
document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);