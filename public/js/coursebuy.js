
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

        var bordernum=numimg/nummber*100-3;
        $('.progress').css('width',bordernum+'%');

        console.log(bordernum)
    })

    //循环图
  var _index5=0;
  $("#four_flash .but_right img").click(function(){
    _index5++;
    var len=$(".flashBg ul.mobile li").length;
    if(_index5+5>len){
      $("#four_flash .flashBg ul.mobile").stop().append($("ul.mobile").html());
    }
    $("#four_flash .flashBg ul.mobile").stop().animate({left:-_index5*326},1000);
    });

    
  $("#four_flash .but_left img").click(function(){
    if(_index5==0){
      $("ul.mobile").prepend($("ul.mobile").html());
      $("ul.mobile").css("left","-1380px");
      _index5=6
    }
    _index5--;
    $("#four_flash .flashBg ul.mobile").stop().animate({left:-_index5*326},1000);
    });