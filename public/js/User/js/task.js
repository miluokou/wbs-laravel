//时间显示	
function getDate() {  
    var today = new Date();  
    var date = today.getFullYear() + "-" + twoDigits(today.getMonth() + 1) + "-" + twoDigits(today.getDate()) + " ";  
    var week = " 星期" + "日一二三四五六 ".charAt(today.getDay());  
    var time = twoDigits(today.getHours()) + ": " + twoDigits(today.getMinutes()) + ": " + twoDigits(today.getSeconds());  
    $(".timeshow").html(date +" "+time);  
}  
function twoDigits(val) {  
    if (val < 10) return "0" + val; return val;  
}  
$(function () {  
    setInterval(getDate, 1000);  
});  

// 求助
    $('.inputqz').click(function(){
        $('.bighelp').css('display','block');
    })
    $('.helpx').click(function(){
        $('.bighelp').css('display','none');
    })
    $('.help button').click(function(){
        $('.bighelp').css('display','none');
    })
//体验
    $('.rushx').click(function(){
        $('.bigrush').css('display','none');
    })
//重置
    $('.inputcz').click(function(){
        var num=$('.readinput').attr('num');
        $('.readinput').val(num)
    })
//重做
    $('.inputcx').click(function(){
        var num=$('.readinput').attr('num');
        $('.readinput').val(num)
        $('.outinput').val('')
        $('#inputyx').attr('num',1);

    })
//作业提示
    $('.tipsx').click(function(){
        $('.bigtips').css('display','none');
    })
//课程全部完成提示弹窗--关闭
    $('.classtipsx').click(function(){
        $('.classbigtips').css('display','none');
    })