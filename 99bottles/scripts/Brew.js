$(document).ready(function(){
    for (var i = 99; i >= 2; i--){
        var lyrics1 = " bottles of beer on the wall, ";
        var lyrics2 = " bottles of beer.";
        var lyrics3 = "Take one down and pass it around, ";
        var lyrics4 = " bottles of beer on the wall.";
        $('body').append('<p><li>' + i + lyrics1 + i + lyrics2 + '</li></p>' + '<p><li>' + lyrics3 + (i - 1) + lyrics4 + '</li></p>');
    }
    while (i < 2){
        $('body').append('<p><li>' + '1 bottle of beer on the wall, 1 bottle of beer.' + '</li></p>' + '<p><li>'+ 'Take one down and pass it around, no more bottles of beer on the wall.' + '</li></p>' + '<p><li>' + 'No more bottles of beer on the wall, no more bottles of beer.' + '</li></p>' + '<p><li>' + 'Go to the store and buy some more, 99 bottles of beer on the wall.' + '</li></p>');
    break;}
});

