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

        if($('body').hasClass('sidebar-unpinned'))
            $('.nav-main .opened').removeClass('opened');
    });

    $('.nav-main > li.has-pages > a .dropdown').click(function(){
        $(this).parents('li').toggleClass('opened');
        console.log(this);
    });

    $('.trigger-quickview').click(function(){
        quickviewVisible(!quickviewIsVisible());
        return false;
    });

    $('#quickview .btn-close').click(function(){
        quickviewVisible(false);
    });

    $('#content-main, #view-overlay').click(function(){
        quickviewVisible(false);

    });

    function quickviewIsVisible(){
        return  $('#quickview').hasClass('opened');
    }

    function quickviewVisible(open){
        console.log(open);
        if(open){
            $('#quickview').addClass('opened');
            $('#view-overlay').addClass('opened');
        } else {
            $('#quickview').removeClass('opened')
            $('#view-overlay').removeClass('opened')
        }
    }

});