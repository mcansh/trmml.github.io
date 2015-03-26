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
    var $element = document.querySelector('#content');
    if (data.error) {
        $element.innerText = 'Failed to load.';
    } else {
        $element.innerText = data.result.name + ' by ' + data.result.artist['#text'] + '.'
    }
});
