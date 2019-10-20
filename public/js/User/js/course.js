// 时间日期
    $(function(){
        var mydate= new Date();
        // var str = "" + mydate.getFullYear() + ".";
  //       str += (mydate.getMonth()+1);
  //        str += mydate.getDate();
            var str=(mydate.getMonth()+1)+"/"+mydate.getDate()+"  "+mydate.getFullYear();

        var l = ["日","一","二","三","四","五","六"];
        var d = mydate.getDay();
        var day = "周" + l[d];

        // $('.personaltime1').html(mydate.getDate());
        $('.personaltime1').html(str);
        $('.personaltime2').html(day);

    })

// 进度条
    $(function(){
        // var percent = 60;
        for (var i=0;i<100;i++)
        {
            var percent = $('.circle_process .rightcirclenum'+i).attr('num');
            if( percent<=50 ){
                $('.circle_process .rightcirclenum'+i).css('transform','rotate('+(-135+(percent*3.6))+'deg)');
            }else {
                $('.circle_process .rightcirclenum'+i).css('transform','rotate(45deg)');
                $('.circle_process .leftcirclenum'+i).css('transform','rotate('+(-135+(percent-50)*3.6)+'deg)');
            }
        }

        var percentone = $('.circle_process .rightcirclenum').attr('num');
            if( percentone<=50 ){
                $('.circle_process .rightcirclenum').css('transform','rotate('+(-135+(percentone*3.6))+'deg)');
            }else {
                $('.circle_process .rightcirclenum').css('transform','rotate(45deg)');
                $('.circle_process .leftcirclenum').css('transform','rotate('+(-135+(percentone-50)*3.6)+'deg)');
            }
    })