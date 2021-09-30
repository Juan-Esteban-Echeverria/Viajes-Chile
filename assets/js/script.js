
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    //Tooltips
    var tooltipTriggerList = [].slice.call( 
        document.querySelectorAll('[data-bs-toggle="tooltip"]') 
    ); 
    tooltipTriggerList.map(function(tooltipTriggerEl) { 
        return new bootstrap.Tooltip(tooltipTriggerEl); 
    }); 

    //Navbar style
    $(window).scroll(function () {
        if ($("#navbar").offset().top > 350) {
            $("#navbar").addClass("navbar-color");
        } else {
            $("#navbar").removeClass("navbar-color");
        }
    });

});