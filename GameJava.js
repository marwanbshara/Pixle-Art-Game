$('#submit').on('click', function makeGrid(event){
  var r = $('#inputHeight').val();//assign variable r the rows input
  var c = $('#inputWeight').val();//assign the variable c the column input
  $("table").empty();// removing previous table's children
    for (var i=0; i<r; i++){
        $('table').append('<tr></tr>');
        for(var j=0; j<c; j++){
          $('tr:last-child').append('<td></td>');
        }
      }

// taking the clcik on the table sell and changing the background-color val
$("table tr td").on('click', function(){
  $(this).css('background-color',$('#colorPicker').val())
});
  event.preventDefault();// preventing default from happening
});
