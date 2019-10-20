    $('.cashrecordstime a').click(function(){
        $('.cashrecordstime a').css('color','#57a8fe');
        $('.cashrecordstime a').css('background-color','#fff');
        $(this).css('color','#fff');
        $(this).css('background-color','#57a8fe');
    })
    $(function(){
        var num=$('.cashrecordslistpage_all div .current').html();
        // alert(num)
        $('.cashrecordslistpage div b').html(num)
    })

    $('.cashrecordstime a').click(function(){
        var num=$(this).attr('num');
        $('.cashrecordstime input').val(num)
        $('.querytimeopen').submit()
    })