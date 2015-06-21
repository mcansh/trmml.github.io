var ghResponse = get('https://api.github.com/users/probablyjosh/repos?sort=pushed')
var lastfmResponse = get('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jshtrmml&api_key=0a7d3b25ed857f679eba1a353e98a658&format=json')
var repos = JSON.parse(ghResponse).slice(0, 2)
var song = JSON.parse(lastfmResponse)

function get(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function addGH(id, index) {
	document.getElementById(id).innerHTML  = '<a href="' + repos[index].html_url + '">'+ repos[index].name + '</a>'
}

addGH('first-repo', 0)
addGH('second-repo', 1)
document.getElementById('now-playing').innerHTML = '<a href="'+ song['recenttracks']['track'][0]['url'] + '">'+ song['recenttracks']['track'][0]['name'] + '</a>'