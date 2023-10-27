// fetch can contain an optional second argument: fetch('url', argument)
  // the argument contain various configuration options for the fetch request 
fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  method: 'GET', // perform a GET request 
  credentials: 'same-origin', // only requests to the same origin as the calling script will include credentials 
  redirect: 'follow', // fetch request will follow redirects and udpate the request's URL accordingly
})

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
