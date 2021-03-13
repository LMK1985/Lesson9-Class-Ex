$(function(){
    $("#getData").click(function(){
        $.ajax({
           url: "data.json",
           dataType: 'json',
           success: function(data){
               let items = [];
               
               $.each(data, function(key, val){
                   items.push('<li id="' + key + '">' + val + '</li>');
               });

               $('<ul/>', {
                   'class': 'interest-list',
                   html: items.join('')
               }).appendTo('body');
           },
           error(xhr, status, error){
               console.log(error);
           }
        });
    });
});