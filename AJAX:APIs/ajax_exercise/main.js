/*

- Refactor the codealong to work with user interaction. In the index.html file
there is a "Get Consumer Finance Data" button. When the user clicks the button,
pull data from the provided link above (http://data.consumerfinance.gov/api/views.json).
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

- Separate your logic so that you can use your functions for another user button
click of "Get Custom Data". Interact with an API of your choice and handle both
success and error scenarios.
*/

 // Consumer Finance Data -> http://data.consumerfinance.gov/api/views.json
  // Alternate Data -> https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD


$('#getDataButton').on('click', getData);
$('#getCustomDataButton').on('click', getCustomData);

function getData() {
    $.get('http://data.consumerfinance.gov/api/views.json', function (r) {
        //	We	get	the	data	back	from	the	request	in	the	parameter	we	pass	in	the	function
        console.log(r);
    });
}

function getCustomData(){
    $.get('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD', function(b){
        console.log(b);
    });
}
