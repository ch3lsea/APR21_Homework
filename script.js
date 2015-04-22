//Simple Explode
// $(document).ready(function() {
//     $('div').on('click', function() {
//         $(this).hide('explode', {pieces : 60}, 400);
//     });
// });

//Explode and remove
// $(document).ready(function() {
//     $('div').on('click', function() {
//         $(this).hide('explode', {pieces : 60}, 400);
//     	$(this).remove();
//     });
// });

//Explode and replace
// $(document).ready(function() {
//     $('div').on('click', function() {
//         $(this).hide('explode', {pieces : 60}, 400).delay(1000);
//         $('body').append('<div>&nbsp;</div>');
//     });
// });

//Mouse Enter/Leave + explode
$(document).ready(function() {
    $('div').on('click', function() {
        $(this).hide('explode', {pieces : 60}, 400);
    })
    $('div').mouseenter(function() {
        $('div').fadeTo('fast', 0.5);
    });
    $('div').mouseleave(function() {
        $('div').fadeTo('fast', 1);
    });
});

