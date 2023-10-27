var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //loop through the data we get back
      for (var i=0; i<data.length; i++) {

        // create HTML elements
        var userName = document.createElement('h1')
        var issueTitle = document.createElement('a')

        // add value to each variable
        userName.textContent = data[i].login
        issueTitle.href = data[i].html_url
        issueTitle.textContent = data[i].html_url

        // append the created elements to the HTML
        userContainer.append(userName);
        userContainer.append(issueTitle)
;      }
    });
}
fetchButton.addEventListener('click', getApi);
