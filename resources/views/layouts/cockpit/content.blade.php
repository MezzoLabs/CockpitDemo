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
                Copyright &copy; 2015 <a href="http://mezzolabs.io">MEZZO</a>. All rights reserved.
            </div>
            <div class="pull-right">
                <div class="clearfix">
                    Made with <img class="logo" src="/img/mezzo/logo_sidebar.png"> by <a href="http://mezzolabs.io">mezzolabs.io</a>
                </div>

            </div>
        </div>
    </footer>

    </div>

</main>