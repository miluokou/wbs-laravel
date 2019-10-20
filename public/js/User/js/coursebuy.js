
    //进度条跟小人
    $(function(){
        var listwidth=$('.progress-list').width();
        var nummber=$('.progress-list').attr('num');//总关卡数
        var numimg=$('.progress-list').attr('numimg');//当前关卡数
        // var allspan=listwidth-(nummber*65);
        // var onespan=Math.floor(allspan/(nummber-1));
        // var nextnum=nummber+1;

        var imgnum=numimg/nummber*100; 
        var color_count=imgnum;
        if(imgnum<0){imgnum=0}
        if(imgnum>=100){imgnum=100}
        var imgnuma=imgnum-4;
        var imgnumb=imgnum-5;
       
        // $('.progress-list span').css('margin-right',onespan+'px')
        // $('.progress-list span:nth-child('+nummber+')').css('margin-right','0px');
        $('.progress-list .progress-listimg').css('left',imgnuma+'%');
        $('.progress-list .progress-listimga').css('left',imgnumb+'%');
        $('.progress').css('width',color_count+'%');
    })

//     //循环图
//   var _index5=0;
// $("#four_flash .but_right a").click(function(){
//     _index5++;
//     var len=$(".flashBg ul.mobile li").length;
//     if(_index5+5>len){
//       $("#four_flash .flashBg ul.mobile").stop().append($("ul.mobile").html());
//     }

//     $("#four_flash .flashBg ul.mobile").stop().animate({left:-_index5*380},1000);
// });

    
// $("#four_flash .but_left a").click(function(){
//     if(_index5==0){
//       $("ul.mobile").prepend($("ul.mobile").html());
//       $("ul.mobile").css("left","-1380px");
//       _index5=6
//     }
//     _index5--;
//     $("#four_flash .flashBg ul.mobile").stop().animate({left:-_index5*380},1000);
// });

    //循环图
var _index5=0;
var len=$(".flashBg ul.mobile li").length;
var len_width=$(".flashBg ul.mobile li").width();
$("#four_flash .but_right a").click(function(){
    var vposition =$("#four_flash .flashBg ul.mobile").position();
    var num=parseInt(vposition.left)-len_width-20;
    if(_index5==len-4){
      return;
    }
    _index5++;
    console.log(_index5)
    console.log(len_width)
    console.log(num)
    // $("#four_flash .flashBg ul.mobile").stop().animate({left:num},1000);
    $("#four_flash .flashBg ul.mobile").stop().animate({left:num},1000);
});

    
$("#four_flash .but_left a").click(function(){
    var vposition = $("#four_flash .flashBg ul.mobile").position();
    // console.log(vposition.left)
    if(_index5==0){
      return;
    }
    var num=parseInt(vposition.left)+len_width+20;
    _index5--;
    console.log(_index5)
    console.log(len_width)
    console.log(num)
    // $("#four_flash .flashBg ul.mobile").stop().animate({left:num},1000);
    $("#four_flash .flashBg ul.mobile").stop().animate({left:num},1000);

});