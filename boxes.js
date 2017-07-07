
$(function(){

$('#secretBox').css('background-color', 'white').append('<h1>secret box!</h1');

$('#row1').children().addClass("boxType3");

$('.box:last').hide();


// $('.boxType1').not('.boxType3').css('background-color', 'white');

$($('#row2').children().slice(0,2)).removeAttr('background');

// $('#container div').not('.row, #secretBox').css('width', '2px');

$('#container').click(function(){
  console.log(event.pageX, event.pageY)
})



// $('.boxType1').wrap('<a href="https://www.galvanize.com"></a>').click(function(){
//   alert("You cannot leave this page!");
//   return false;
// });

// 3. For all box divs, add a click handler that adds an image of a cute puppy to the box.
//   If the image is clicked again, remove the cute puppy.
// 4. Write a click handler __on the container div__.
//   The click handler should turn the container background to black and the background of
//     the original div that was clicked to white.  If the user original div that was clicked happened
//       to be the container div, change the background of the container div to lime green.
//         You __should not__ use any selectors for this exercise.
//           You can do it completely with what is given to you in the event callback.


$('.box').click(function(){
    if ($(this).has('img').length>0) {
        $(this).empty()
    }
      else {
          $(this).append('<img src="Images/sadPupper.jpg-c200", class="pupImg" alt="pupper">')
          $('.pupImg').css('height', 'inherit', 'width', 'inherit')
        }
})

// $('#container').click(function(e){
//   $('#container').css('backgroundcolor', 'black')
// })
//










})
