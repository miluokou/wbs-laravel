//用户--鼠标移入移出效果
$(".navuser").hover(function(){
    $('.navdata').css('display','block');
},function(){})
$(".navdata").hover(function(){},function(){
    $('.navdata').css('display','none');
})