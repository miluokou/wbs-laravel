//进度条跟小人
    $(function(){
        var listwidth=$('.progress-list').width();
        var nummber=$('.progress-list').attr('num');//总关卡数
        var numimg=$('.progress-list').attr('numimg');//当前关卡数
        var allspan=listwidth-(nummber*65);
        var onespan=Math.floor(allspan/(nummber-1));
        var nextnum=nummber+1;
        var imgnum=(onespan+65)*(numimg-1);
       
        $('.progress-list span').css('margin-right',onespan+'px')
        $('.progress-list span:nth-child('+nummber+')').css('margin-right','0px');
        $('.progress-list img').css('left',imgnum+'px');

        var bordernum=numimg/nummber*100-5;
        $('.progress').css('width',bordernum+'%');

        // console.log(bordernum)
    })

    $(function(){
        var listwidth=$('.progresslistlenght').width();
        var nummber=$('.progresslistlenght').attr('num');//总关卡数
        var numimg=$('.progresslistlenght').attr('numimg');//当前关卡数
        var allspan=listwidth-(nummber*65);
        var onespan=Math.floor(allspan/(nummber-1));
        var nextnum=nummber+1;
        var imgnum=(onespan+65)*(numimg-1);
       
        $('.progresslistlenght span').css('margin-right',onespan+'px')
        $('.progresslistlenght span:nth-child('+nummber+')').css('margin-right','0px');
        $('.progresslistlenght img').css('left',imgnum+'px');

        var bordernum=numimg/nummber*100-5;
        $('.progresslenght').css('width',bordernum+'%');

        // console.log(bordernum)
    })