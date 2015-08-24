jQuery( document ).ready(function( $ ) {

    $('.sidebar-pin').click(function(){
        var sidebarIsPinned = $('body').hasClass('sidebar-pinned');

        if(sidebarIsPinned) {
            $('body').addClass('sidebar-unpinned').removeClass('sidebar-pinned');
            $(this).addClass('fa-circle-o').removeClass('fa-dot-circle-o');
        }
        else {
            $('body').addClass('sidebar-pinned').removeClass('sidebar-unpinned');
            $(this).addClass('fa-dot-circle-o').removeClass('fa-circle-o');

        }

    });


   $('#sidebar').mouseenter(function(){
        $('body').addClass('sidebar-mousein').removeClass('sidebar-mouseout');
    });

    $('#sidebar').mouseleave(function(){
        $('body').addClass('sidebar-mouseout').removeClass('sidebar-mousein');
    });

    $('.nav-main > li.has-pages > a .dropdown').click(function(){
        $(this).parents('li').toggleClass('opened');
        console.log(this);
    });

});