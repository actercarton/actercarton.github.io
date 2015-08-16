var gallery = function() {
  var code = '\
<!-- The Bootstrap Image Gallery lightbox, should be a child element of the document body -->\
<div id="blueimp-gallery" class="blueimp-gallery" data-use-bootstrap-modal="false">\
    <!-- The container for the modal slides -->\
    <div class="slides"></div>\
    <!-- Controls for the borderless lightbox -->\
    <h3 class="title"></h3>\
    <a class="prev">‹</a>\
    <a class="next">›</a>\
    <a class="close">×</a>\
    <a class="play-pause"></a>\
    <ol class="indicator"></ol>\
    <!-- The modal dialog, which will be used to wrap the lightbox content -->\
    <div class="modal fade">\
        <div class="modal-dialog">\
            <div class="modal-content">\
                <div class="modal-header">\
                    <button type="button" class="close" aria-hidden="true">&times;</button>\
                    <h4 class="modal-title"></h4>\
                </div>\
                <div class="modal-body next"></div>\
                <div class="modal-footer">\
                    <button type="button" class="btn btn-default pull-left prev">\
                        <i class="glyphicon glyphicon-chevron-left"></i>\
                        Previous\
                    </button>\
                    <button type="button" class="btn btn-primary next">\
                        Next\
                        <i class="glyphicon glyphicon-chevron-right"></i>\
                    </button>\
                </div>\
            </div>\
        </div>\
    </div>\
</div>';

  document.write(code);
};

var manu = function() {
  var doc = '';
  var i;

  for(i = 1; i <= 19; i++){
    doc += '\
    <div class="col-md-3 image">\
      <div class="image gallery">\
        <a href="../img/manufacturing/' + i + '.JPG" data-gallery>\
          <img src="../img/manufacturing/thumb/' + i + '.JPG">\
        </a>\
      </div>\
    </div>\
    ';
  };

  document.write(doc);
};

var product = function(type) {
  var doc = '';
  var i, j;
  var typeName = '';

  switch(type){
    case 'rsc':
      typeName = 'Regular Slotted Carton';
      j = 8;
      break;
    case 'wpb':
      typeName = 'White Paper Board';
      j = 7;
      break;
    case 'dp':
      typeName = 'Diecut Products';
      j = 13;
      break;
    case 'fpf':
      typeName = 'Five Panel Folder';
      j = 1;
      break;
    case 'fo':
      typeName = 'Fully Overlapping';
      j = 1;
      break;
    case 'pa':
      typeName = 'Paper Angle';
      j = 1;
      break;
    case 'nest':
      typeName = 'Nesting';
      j = 2;
      break;
    case 'tb':
      typeName = 'Top/Bottom';
      j = 4;
      break;
    case 'ep':
      typeName = "Express Pallet"
      j = 1;
      break;
  };

  for(i = 1; i <= j; i++){
    doc += '\
    <div class="col-md-3 image">\
      <div class="image gallery products">\
        <a href="../img/products/' + type + i + '.png" data-gallery>\
          <img src="../img/products/thumb/' + type + i + '.png" alt = "' + typeName + ' - ' + i +'">\
        </a>\
      </div>\
    </div>\
    '
  };

  document.write(doc);
};
