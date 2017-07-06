// 1. Find the secretBox on the page. Set the background color to white.  Add an h1 tag that says, "secret box!"
// 2. Find all child divs of the first row.  Add the class boxType3 to all of these divs.
// 3. Make the last box in the last row disappear. (Hint, look into the display style.
//       Also, you should only get back one element from your selector.)
// 4. Change all red boxes to white.
// 5. Get the first two divs in the second row.  Take away all styling from the divs.
// 6. Get all divs inside the container that are not row divs and are not the secret box div.
//       Set the width of the divs to 2 pixels.

$(function(){

$('#secretBox').css('background-color', 'white').append('<h1>secret box!</h1');

$('#row1').children().addClass("boxType3");

$('.box:last').hide();

$('.boxType1').css('background-color', 'white')
//not box type 3

$($('#row2').children().slice(0,2)).removeAttr('background')
















})
