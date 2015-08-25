<main id="content-container">
    <div id="content-aside">
        hello
    </div>

    <div id="content-main">
    <div class="content">

        <div class="wrapper">
           @include("layouts/test/panel")
        </div>


        <div class="wrapper">
            ads
        </div>

        <div class="wrapper">
            df
        </div>
        @yield('content')


    </div>
    <footer id="content-footer">
        <div class="content-footer-inner clearfix">
            <div class="pull-left">
                Copyright 2015
            </div>
            <div class="pull-right">
                Made with Love
            </div>
        </div>
    </footer>

    </div>

</main>