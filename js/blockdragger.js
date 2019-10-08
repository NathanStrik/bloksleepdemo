  $( function() {
    $( "#block-container-left, #block-container-right" ).sortable({
      connectWith: ".connected-block-container"
    }).disableSelection();
  } );