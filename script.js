// Grab Last.fm current song
function request (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    callback(JSON.parse(xhr.responseText));
  });
  xhr.open('GET', url, true);
  xhr.send();
}

request('http://last-fm-api-josh-trommel.herokuapp.com/latest', function (data) {
  if (data.error) {
    $element.innerText = 'Failed to load.';
  } else {
    var song_name = data.result.name;
    var artist_name = data.result.artist['#text']
    var final = song_name + ' by ' + artist_name
    var data = {
      "message": "There'll be something here soon.",
      "author": {
        "name": "Josh Trommel",
        "twitter": "@nulljosh",
        "github": "probablyjosh",
        "email": "joshtrommel at gmail dot com",
        "resume": "/resume.pdf",
        "music": final
      }
    };

  document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 2);

  }
});
