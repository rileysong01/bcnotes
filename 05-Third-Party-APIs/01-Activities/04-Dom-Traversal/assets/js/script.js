
// selects all immediate children of the element with id 'top'
$('#top').children().css('color', 'yellow');

// adds the class "boxy" 
$('#top').children().eq(0).addClass('boxy');

// append a line of code to the 5th direct child of the element with id 'top'
$('#top').children().eq(4).append($('<li>Classmates</li>'));

// selects all direct ul children of #top, selecting all its direct children and adding multiple classes and css styling
$('#top').children('ul').children().addClass('bg-primary text-dark mb-3 p-3').css('border-radius', '.4rem');
