
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    var tooltipTriggerList = [].slice.call( 
        document.querySelectorAll('[data-bs-toggle="tooltip"]') 
    ); 
    tooltipTriggerList.map(function(tooltipTriggerEl) { 
        return new bootstrap.Tooltip(tooltipTriggerEl); 
    }); 

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

});