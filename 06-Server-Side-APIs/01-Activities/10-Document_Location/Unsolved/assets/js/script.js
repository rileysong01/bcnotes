var badRequestUrl = 'https://api.github.com/unicorns';

// passing parameter to the 404.html
var redirectUrl = './404.html?msg=heehoo peanut&city=toronto';

//if fetch response is not 200, go to the 404 HTML
fetch(badRequestUrl)
.then(function (response) {
  if (response.status !== 200) {
    window.location.replace(redirectUrl);
}
return response.json();
}
);
