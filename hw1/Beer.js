//print the number 99 then print the lyrics "bottles of beer on the wall,". Reprint the number 99 then print the lyrics "bottles of beer."
//on the next line, print the lyrics "Take one down and pass it around," then print the number 98 and the lyrics "bottles of beer on the wall."
//do this on a descending loop until reaching 1. Once 1 is printed, the lyrics must change to "bottle of beer on the wall"
//print 1 then print the lyrics "bottle of beer on the wall,". Reprint 1 then print "bottle of beer."
//on the next line print "Take one down and pass it around," then print "no more bottles of beer on the wall."
//on the second to last line, print "No more bottles of beer on the wall, no more bottles of beer."
//on the next line, print "Go to the store and buy some more, 99 bottles of beer on the wall."

var lyrics1 = "bottles of beer on the wall,";
var lyrics2 = "bottles of beer.";
var lyrics3 = "Take one down and pass it around,";
var lyrics4 = "bottles of beer on the wall.";


    for (var i = 99; i >= 2; i--){
        console.log(i + " " + lyrics1 + " " + i + " " + lyrics2);
        console.log(lyrics3 + " " + --i + " " + lyrics4);
        console.log(i + " " + lyrics1 + " " + i + " " + lyrics2);
        console.log(lyrics3 + " " + --i + " " + lyrics4);
    }

