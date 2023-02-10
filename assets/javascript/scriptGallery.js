$(document).ready(function(){

    $('.tab').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.image').show(0);
        }else{
            $('.image').not('.'+filter).hide(0);
            $('.image').filter('.'+filter).show(0);
        }

    });

    $('.image-container').magnificPopup({

        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }

    });

});

