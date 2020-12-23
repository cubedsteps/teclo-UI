$(document).ready(function() {
    var checkList = [];
    $("#issue-list").select2({
      width: "100%",
      height: "80px",
      templateSelection: function (data, container) {
        var selection = $('#issue-list').select2('data');
        var idx = selection.indexOf(data);
        var bg = $(selection[idx].element).data('bg');
        
        data.idx = idx;
        
        $(container).css("background-color", bg);
        return data.text;
      },
    }).val(checkList).trigger("change");
  
    
    $("#issuelist").on("select2:select", function (evt) {
      var element = evt.params.data.element;
      var $element = $(element);
  
      $element.detach();
      $(this).append($element);
      $(this).trigger("change");
    });    
  })  