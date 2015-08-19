jQuery( document ).ready(function( $ ) {

    $('.sidebar-pin').click(function(){
        var sidebarIsOpen = $('body').hasClass('sidebar-open');

        if(sidebarIsOpen)
            $('body').addClass('sidebar-closed').removeClass('sidebar-open');
        else
            $('body').addClass('sidebar-open').removeClass('sidebar-closed');

    });


});