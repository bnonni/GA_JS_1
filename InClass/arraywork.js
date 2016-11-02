var randomList =[34,456,3451,7,808,9090,2,4,0,12,-2,-1224];
console.log(primed(sortNumbers(randomList)));


function sortNumbers(array){
    var sortedList = array.sort(function(a,b){
        return a > b;
    });
    console.log(sortedList);
    var high = sortedList[sortedList.length-1];
    return high;
}



function primed (val) {
    for(var j = 2; j < val; j++){
     if(val % j == 0){
         return false;
     }
    }
    return true;
}