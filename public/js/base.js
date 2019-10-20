//用户--鼠标移入移出效果
	// $(".navuser").hover(function(){
	// 	$('.navdata').css('display','block');
	// },function(){})
	// $(".navdata").hover(function(){},function(){
	// 	$('.navdata').css('display','none');
	// })
//侧边
	// $(".click_wx").hover(function(){
	// 	$('.click_wx div').css('display','block');
	//   // console.log('移入');
	// },function(){
	// 	$('.click_wx div').css('display','none');
	//     // console.log('移出');
	// })
	// $(".click_wb").hover(function(){
	// 	$('.click_wb div').css('display','block');
	//   // console.log('移入');
	// },function(){
	// 	$('.click_wb div').css('display','none');
	//     // console.log('移出');
	// })
	// $(".click_qq").hover(function(){
	// 	$('.click_qq div').css('display','block');
	//   // console.log('移入');
	// },function(){
	// 	$('.click_qq div').css('display','none');
	//     // console.log('移出');
	// })
	// $('.click_tqq').click(function(){
	// 	window.open("http://wpa.qq.com/msgrd?v=3&uin=871360787&site=qq&menu=yes");
	// 	// window.open = "";
 //    });
 //    //返回顶部
	// $('.click_top').click(function(){
 //            $('html , body').animate({scrollTop: 0},'slow');
 //    });


	// $('.cutphone').click(function(){
	// 	$('.logowechat').css('display','block');
	// 	$('.logophone').css('display','none');
	// })
	// $('.cutwechat').click(function(){
	// 	$('.logowechat').css('display','none');
	// 	$('.logophone').css('display','block');
	// })

// 关闭页面
	$('.mixlogoout').click(function(){
		$('.biglogo').css('display','none');

	})

	//
	$('.lohoout').click(function(){
		$('.logoshow').css('display','block');

	})
	$('.logoin').click(function(){
		$('.logoshow').css('display','none');
		
	})
	$('.click_xy').change(function(){
		if($(this).is(':checked')){
			$('.mixlogoimg1 div').css('display','none');
			$('.agreement').css('display','none');
			$('.logosubmit').attr('disabled','ture')
		}else{
			$('.mixlogoimg1 div').css('display','block');
			$('.agreement').css('display','block');
			$('.logosubmit').attr('disabled','false')
		}
	})


/*调查信息表*/

	$('.imgclick').click(function(){
		var  checkbox=$('.fristmasmin input').is(":checked");
		if(checkbox==true){
			$('.fristmasmin').css('display','none');
			$('.fristinput').css('display','block');	
		}else{
	 		alert('请填写一下');	
		}
	})
	$('.fristmasout').click(function(){
		$('.fristmas').css('display','none');
		window.location.reload();
	})
	$('.imgclicko').click(function(){
		$('.fristmas').css('display','none');
		window.location.reload()
	})

