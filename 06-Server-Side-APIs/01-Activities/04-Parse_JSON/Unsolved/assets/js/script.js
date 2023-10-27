// get 5 issues of Twitter's Chill repo
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  // data refers to the resolved value from the previous promise (parsed JSON response received from Github API)
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].url);
      console.log(data[i].user.login);
    }
  });
