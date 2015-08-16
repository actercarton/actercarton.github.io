var head = function(gallery){
  var doc = '';
  if(gallery == true){
    doc += '\
    <!-- Bootstrap Image Gallery css-->\
    <link rel="stylesheet" href="../css/gallery/bootstrap.min.css">\
    <link rel="stylesheet" href="../css/gallery/blueimp-gallery.min.css">\
    <link rel="stylesheet" href="../css/gallery/bootstrap-image-gallery.min.css">\
    '
  };

  doc +='\
    <!-- Bootstrap -->\
    <link href="../css/bootstrap.min.css" rel="stylesheet">\
    <link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">\
    <link href="../css/style.css" rel="stylesheet">\
    <!-- jQuery (necessary for Bootstrap\'s JavaScript plugins) -->\
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>\
    <!-- Include all compiled plugins (below), or include individual files as needed -->\
    <script src="../js/bootstrap.min.js"></script>\
    <!-- Calendar script-->\
    <script src="../js/calendar.js"></script>'

  if(gallery == true){
    doc += '\
    <!-- Toggle script-->\
    <script src="../js/toggle.js"></script>\
    <!-- Bootstrap Image Gallery files-->\
    <script src="../js/gallery/jquery.blueimp-gallery.min.js"></script>\
    <script src="../js/gallery/bootstrap-image-gallery.min.js"></script>\
    <script src="../js/gallery-init.js"></script>\
    '
  };

  doc += '\
    <!--Script files end-->\
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->\
    <!-- WARNING: Respond.js doesn\'t work if you view the page via file:// -->\
    <!--[if lt IE 9]>\
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>\
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>\
    <![endif]-->\
    '

  document.write(doc);
};

var header = function(title){
  var navId = 'li#' + title;
  var doc ='\
  <div class="logo">\
    <a href="//">'

  if(title == '404' || title == 'home'){
    doc += '<img src="img/blogo.png">'
  }else{
    doc += '<img src="../img/blogo.png">'
  }

  doc += '\
    </a>\
  </div>\
  <header>\
    <nav class="navbar navbar-default">\
      <div class="container-fluid">\
        <!--Mobile-friendly navbar-->\
        <div class="navbar-header">\
          <a class="navbar-brand" href="//">Acter Carton Enterprise Sdn Bhd</a>\
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar" aria-expanded="false">\
            <span class="sr-only">Toggle navigation</span>\
            <span class="icon-bar"></span>\
            <span class="icon-bar"></span>\
            <span class="icon-bar"></span>\
          </button>\
        </div>\
        <!--Normal navbar-->\
        <div class="collapse navbar-collapse" id="main-navbar">\
          <ul class="nav navbar-nav navbar-right">\
            <li id="about"><a href="/about">About</a></li>\
            <li id="manufacturing"><a href="/manufacturing">Manufacturing</a></li>\
            <li id="products"><a href="/products">Products</a></li>\
            <li id="contact"><a href="/contact">Contact</a></li>\
          </ul>\
        </div>\
      </div>\
    </nav>\
  </header>\
  '
  var main = function() {
    $(navId).addClass("active");
  };

  $(document).ready(main);

  document.write(doc);
};

var footer = function(title){
  var navId = 'li#' + title;
  var doc = '\
  <footer>\
    <div class="container-fluid footer">\
      <div class="row footer">\
        <!-- About Us Column Footer-->\
        <div class="col-md-3 footer">\
          <h4><b>About Us</b></h4>\
          <p>Acter Carton Enterprise Sdn. Bhd. leads the market in\
            manufacturing corrugated carton boxes in Malaysia. Since its\
            incorporation in 1992, Acter has been specializing in designing\
            creative packaging products to keep up with the diverse trend of\
            today\'s paper box market.<a href="/about"><i> More...</i></a>\
          </p>\
        </div>\
        <!-- Sitemap Column Footer -->\
        <div class="col-md-3 footer">\
          <h4><b>Sitemap</b></h4>\
          <ul class="nav nav-pills nav-stacked">\
          <li id="home"><a href="/">Home</a></li>\
          <li id="about"><a href="/about">About</a></li>\
          <li id="manufacturing"><a href="/manufacturing">Manufacturing</a></li>\
          <li id="products"><a href="/products">Products</a></li>\
          <li id="contact"><a href="/contact">Contact</a></li>\
          </ul>\
        </div>\
        <!-- Calendar Column Footer-->\
        <div class="col-md-3 footer">\
          <h4><b>Calendar</b></h4>\
          <script type="text/javascript">calendar();</script>\
        </div>\
        <!-- Contact Column Footer-->\
        <div class="col-md-3 footer">\
          <h4><b>Contact Info</b></h4>\
          <p><span class="glyphicon glyphicon-envelope"></span>\
            <a href="mailto:actercarton@yahoo.com">actercarton@yahoo.com</a></p>\
          <p><span class="glyphicon glyphicon-earphone"></span>\
            Call Us: +603 3290 1849</p>\
        </div>\
      </div>\
      <hr>\
      <div class="row footnote">\
        <div class="col-md-12">\
          <p>Copyright © Acter Carton Sdn Bhd. All rights reserved.</p>\
        </div>\
      </div>\
    </div>\
  </footer>\
  '

  var main = function() {
    $(navId).addClass("active");
  };

  $(document).ready(main);

  document.write(doc);
}
