    $('.clickinto').click(function(){
        var num=$('#ids').val();
        if(num==''){alert('内容不能为空！');return;}
        $('.budget_click').submit();
    })
var t;
$(document).on("click", ".imgopen", function(){ 
    var number=$(this).attr('number');
    $('.imgaffter').attr('imgnows',number)
    var num=$('.beforeimg input').val();
    if(number<num){return;}
    num=parseInt(num)+1;
    var str="<div class='master_img_opena'><input type='file' name='imga"+num+"'  class='imgopen imgnows"+num+"' number='"+num+"'><img src='/Public/User/images/3ae5cd8.png' ></div>";
    $('.beforeimg').before(str);
    $('.beforeimg input').val(num);
}); 

$(document).on("change", ".imgopen", function(){ 
  dataArr = { data : [] };  
  fd = new FormData();  
  var iLen = this.files.length;  
  for(var i=0;i<iLen;i++){  
      // if (!input['value'].match(/.jpg|.gif|.png|.bmp/i)){　　//判断上传文件格式  
      //     return alert("上传的图片格式不正确，请重新选择");  
      // }  
      var reader = new FileReader();  
      fd.append(i,this.files[i]);  
      reader.readAsDataURL(this.files[i]);  //转成base64  
      var fileName = this.files[i].name;  
      reader.onload = function(e){  
          var imgMsg = {  
                          name : fileName,//获取文件名  
                          base64 : this.result   //reader.readAsDataURL方法执行完后，base64数据储存在reader.result里  
                        }  
          dataArr.data.push(imgMsg);  
          // result = '<div class="feedbackimgout" ><img src="'+this.result+'" alt=""/></div>';  
          // $('.feedbackimgin').before(result);
          console.log(this.result)
          var str='<img src="'+this.result+'">';
          var imgnows='imgnows'+$('.imgaffter').attr('imgnows')

          $('.'+imgnows).next().attr('src',this.result)
          // $('.aff').attr('src',this.result)
          // $('.'+imgnows).sidebar('img').remove()
          // $('.'+imgnows).after(str)

          console.log(imgnows)
      }
  }
}); 
