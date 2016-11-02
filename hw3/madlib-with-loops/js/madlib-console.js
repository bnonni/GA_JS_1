var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var idea;
var favorites = [];


document.getElementById('create').onclick = function() {startupGenerate()};

function startupGenerate () {

    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));

    document.getElementById('xForY').innerHTML = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
}

document.getElementById('save').onclick = function() {saveStartup()};


function saveStartup () {
    favorites.push(idea);
    console.log(favorites);
}

function print () {
for (i =0; i < favorites.length; i++){
    document.getElementById('favorites').innerHTML += favorites[i]
}
//
// function saveStartup () {
//     var x = 0;
//     var startupArray = [];
//
//     startupArray[x] = document.getElementById('xForY').textContent;
//     alert(startupArray + 'added to favorites!');
// }
//
// document.getElementById('print').onclick = function () {printArray()};
//
// function printArray () {
//
//     document.getElementById('favorites').toString('startupArray');
}
