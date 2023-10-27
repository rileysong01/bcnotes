var badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(badRequestUrl) {
  fetch(badRequestUrl)
    .then(function (response) {
      console.log(response.status);
      
      // .status refers to the outcome of the request and the current state of the server's response
      if (response.status > 299 ) {
        responseText.textContent= response.status
      }

    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(badRequestUrl);
