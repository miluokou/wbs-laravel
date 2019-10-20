//进度条跟小人
    $(function(){
        for (var i = 0; i <= 1; i++) {
            var progresslistall='progresslistall'+i;
            var progressnum='progressnum'+i;

            var listwidth=$('.'+progresslistall).width();
            var nummber=$('.'+progresslistall).attr('num');//总关卡数
            var numimg=$('.'+progresslistall).attr('numimg');//当前关卡数
            var allspan=listwidth-(nummber*50);
            var onespan=Math.floor(allspan/(nummber-1));
            var nextnum=nummber+1;
            var imgnum=numimg/nummber*100;
            var bordernum=(numimg-0.5)/nummber*100;
            if(imgnum<0){imgnum=0}
            if(imgnum>=100){imgnum=99}
            var imgnuma=imgnum-2;
            $('.'+progressnum).css('width',imgnum+'%');
            $('.'+progresslistall+' img').css('left',imgnum+'%');
            $('.'+progresslistall+' .progress-listimga').css('left',imgnuma+'%');

        }
    })
//积分
    $(function(){
        var listwidth=$('.progresslistlenght').width();
        var nummber=$('.progresslistlenght').attr('num');//总11
        var numimg=$('.progresslistlenght').attr('numimg');//当前积分数
        var allspan=listwidth-(nummber*30);
        var onespan=Math.floor(allspan/(nummber-1));
        var nextnum=nummber+1;
        // var imgnum=(onespan+30)*(numimg-1);
        var bordernum=numimg/200*100;
        var imgnum=numimg/200*listwidth-30;
        if(listwidth-30<imgnum){
            imgnum=listwidth-30;
        }
        if(bordernum>100){
            bordernum=100;
        }
        $('.progresslistlenght span').css('margin-right',onespan+'px')
        $('.progresslistlenght span:nth-child('+nummber+')').css('margin-right','0px');
        $('.progresslistlenght img').css('left',imgnum+'px');

        $('.progresslenght').css('width',bordernum+'%');

        // console.log(listwidth)
        // console.log(bordernum)
    })

// 时间日期
    $(function(){
        var mydate= new Date();
        // var str = "" + mydate.getFullYear() + ".";
        //str += (mydate.getMonth()+1);
        //str += mydate.getDate();
        var str=(mydate.getMonth()+1)+"/"+mydate.getDate()+"  "+mydate.getFullYear();

        var l = ["日","一","二","三","四","五","六"];
        var d = mydate.getDay();
        var day = "周" + l[d];

        // $('.personaltime1').html(mydate.getDate());
        $('.personaltime1').html(str);
        $('.personaltime2').html(day);

    })

//积分说明
    $('.integral-description').hover(function(){
        $('.integral-description div').css('display','block')
        $('.integral-description img').css('transform', 'rotate(180deg)') ;

    },function(){ 
        $('.integral-description div').css('display','none')
        $('.integral-description img').css('transform', 'rotate(0deg)') ;

    })

//提现
    $('.reflect-cash-close').click(function(){
        $('.reflect-box').css('display','none');
    })
    $('.reflect-prompt-close').click(function(){
        $('.reflect-box').css('display','none');
        window.location.reload();

    })
    $('.reflect-cash-opne').click(function(){
        $('.reflect-box').css('display','block');
    })
    $('.reflect-prompt-close_sb').click(function(){
        $('.reflect-box').css('display','none');
        window.location.reload();

    })


