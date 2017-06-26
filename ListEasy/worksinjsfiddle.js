
var main = function() {
var template = function(text) {
return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
        };
        
        var checkstrike = function(x){
  if ($(x).siblings().is(':checked'))
 {  $(x).siblings().prop('checked', false);
    $(x).removeClass('strike');
 } else {
  $(x).siblings().prop('checked', true);
     $(x).addClass('strike');
 }
};

        var add = function(item) {
            var html = template(item);
            $(html).appendTo('.list');
        };
        
            $('form').submit(function() {
                var todo = $('#todo');
                if (todo.val() !== "") {
                    var html = template(todo.val());
                    $(html).appendTo('.list');
                    $(todo).val("");
                }
                return false;
            });
            $(document).on("click", '.glyphicon-remove', function() {
                $(this).parent().remove();
            });
            $(document).on("click", '.glyphicon-star', function() {
                $(this).toggleClass('active');
            });
            $(document).on('click','span',function() {
 							   checkstrike(this);
            });  
            if (annyang) {
                var commands = {
                    'add *item': add,
                };
                annyang.addCommands(commands);
                annyang.start();
            }
        };
        
                $(document).ready(main);