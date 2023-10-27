
fetch('https://api.github.com/gists/public?since=2021-06-01&per_page=100')
// https is the protocol
// api.github.com is the domain
// /gists/public is the endpoint 
// ? is a delimiter that separates everything in the URL from the parameters
  // parameters are passed to the end point
// & is a delimiter that separates key value pairs in the parameters


  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
