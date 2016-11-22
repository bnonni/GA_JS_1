// Write an IIFE function that takes a timer argument.
// The function will automatically execute and count up every second until the specified argument.
// Use the setTimeout function to count up.
// Hint: a second is the timer passed * 1000 (milliseconds).

// var	countUp = function() {
//     for(var	i = 0; i < 100000; i++) {
//         console.log(i);
//     }
//         setTimeout(function () {
//             console.log(countUp);
//         }, 1000);
//     }();

// (function (timer){
//     for(var i=1; i<timer; i++){
//         function runCountDown(j){
//             setTimeout(
//                 function (){
//                     console.log(j);
//                 }, j*1000);
//         };
//         runCountDown(i);
//     }
// })(8);

(function (num){
    console.log("%s", num)
})(10);

var example = function (num){
    console.log(num);
}(10);