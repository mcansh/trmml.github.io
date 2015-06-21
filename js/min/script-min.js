var repos = JSON.parse(get()).slice(0, 2)

function get() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'https://api.github.com/users/probablyjosh/repos?sort=pushed', false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function add(id, index) {
	document.getElementById(id).innerHTML  = '<a href="' + repos[index].html_url + '">'+ repos[index].name + '</a>'
}

add('first-repo', 0)
add('second-repo', 1)

