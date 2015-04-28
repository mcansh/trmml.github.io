// Grab Last.fm current song
function request (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    callback(JSON.parse(xhr.responseText));
  });
  xhr.open('GET', url, true);
  xhr.send();
}
request('https://last-fm-api-josh-trommel.herokuapp.com/latest', function (data) {
  var $element = document.querySelector('#song');
  if (data.error) {
    $element.innerText = 'Failed to load.';
  } else {
    var $link = document.createElement('a');
    $link.href = data.result.url;
    $link.innerText = data.result.name;
    var $extra = document.createDocumentFragment();
    $extra.textContent = ' by ' + data.result.artist['#text'] + '.';
    $element.innerText = '';
    $element.appendChild($link);
    $element.appendChild($extra);
  }
});
