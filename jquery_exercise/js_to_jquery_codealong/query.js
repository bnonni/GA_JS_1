function addToList($list, thing) {
    var $thingLi = $('<li>');
    $thingLi.text(thing);
    $list.append($thingLi);
}

$(document).ready(function)