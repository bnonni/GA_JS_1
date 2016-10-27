
document.getElementById('create').onclick = function() {startupGenerate()};

function startupGenerate () {

    var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));

    document.getElementById('xForY').innerHTML = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
}

document.getElementById('save').onclick = function() {saveStartup()};

function saveStartup () {
    document.getElementById('xForY').innerHTML.push = favArray;
    var favArray = [];
}