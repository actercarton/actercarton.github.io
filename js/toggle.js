var main = function() {
  $('li').click(function() {
    var contentId = '.col-md-9.' + this.id;
    var navId = 'li#' + this.id;

    if($(navId).hasClass("active") == false) {
      $('.col-md-9').hide(200);
      $('ul.sidebar-navi > li').removeClass("active");
      $(contentId).show(1000);
      $(navId).addClass("active");
    };
  });
};

$(document).ready(main);
