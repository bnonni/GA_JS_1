/* Independent Practice

Making a favorites list: jQuery


You'll add the ability to complete tasks in your favorite things list. Your program must complete the following rules:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing").
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through).
- Each new item added by the user needs to also have the "complete task" link at the end.

*/
function addToList($list, thing) {
  var $thingLi = $('<li>');
  $thingLi.text(thing);
  $list.append($thingLi);
};

function addLink ($lis){
    var $completeLink = $('<span>').html(' complete task');
        $completeLink.css('color','blue');
    $lis.append($completeLink);
    $('span').on('click',function(){
        $(this).parent().css('text-decoartion','line-through');
        $(this).css('display','none');
    });
}

  var $thingList = $('#fav-list');
  var $button = $('#new-thing-button');
  var $newThingInput = $('#new-thing');

var $newThingItems = $('#fav-list .fav-thing');
addLink($newThingItems);

  $button.on('click', function(event) {
    event.preventDefault();
    var newThing = $newThingInput.val();
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList($thingList, newThing);
      $newThingInput.val('');
    }
  });


