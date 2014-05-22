<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>

    <!-- Basic Page Needs
  ================================================== -->
    <meta charset="utf-8">
    <title>the clock</title>
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Mobile Specific Metas
  ================================================== -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0">

    <!-- Scripts
  ================================================== -->
    <script src="javascripts/script.js"></script>
    <script src="javascripts/jquery.min.js"></script>

    <!-- CSS
  ================================================== -->
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/layout.css">

    <!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Favicons
    ================================================== -->
    <link rel="shortcut icon" href="img/favicon.ico">

</head>
<body>

    <!-- Primary Page Layout
    ================================================== -->

<section>
    <?php include "uhr.php"; ?>
</section>
<section>
    <div class="container">
        <script type="text/javascript">
            var aktiv = setInterval("Zeit()", 2000);
        </script>
    </div>
</section>

    <script type="text/javascript">
    $("div.hover").mouseover(function() {
        $(this).parents().find("div.bt").css( 'color', '#00ffff' );
        $(this).parents().find("div.bt").addClass( "yes" );
        $('#mail').removeClass("no").addClass("yes");
    }).mouseout(function() {
        $(this).parents().find("div.bt").css( 'color', '#333333' );
        $(this).parents().find("div.bt").removeClass( "yes" );
        $('#mail').removeClass("yes").addClass("no");

    });
    </script>

    <!-- JS
    ================================================== -->
    <script src="javascripts/tabs.js"></script>

<!-- End Document
================================================== -->
</body>
</html>
