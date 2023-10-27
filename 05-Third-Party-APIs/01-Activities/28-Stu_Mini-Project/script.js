//display time
    //wrap dayjs() in setInterval

setInterval(function() {
    $('#currentTime').text((dayjs().format('MMMM D, YYYY [at] hh:mm:ss a')))
}, 1000)

//create bootstrap card



//modal dialog
// $('#myModal').modal({
//     keyboard: false
//   })

  $( function() {
    $( "#datepicker" ).datepicker();
  } );

//form with 4 inputs
