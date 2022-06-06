async function deleteFormHandler(event) {
  event.preventDefault();

  const Id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch(`/api/posts/${Id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        post_id: Id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
    
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);