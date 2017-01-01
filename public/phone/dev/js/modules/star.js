/**
 * Created by zhouhuafei on 17/1/2.
 */
//手机极简星级评论
function star(json){
    var opt=json||{};
    var obj=opt.obj;
    var arr=[].slice.call(obj);
    var len=arr.length;
    arr.forEach(function(v,i){
        v.addEventListener('click',function(){
            for(var j=0;j<len;j++){
                if(j<=i){
                    arr[j].classList.add('m-star-active');
                }else{
                    arr[j].classList.remove('m-star-active');
                }
            }
        })
    })
}
module.exports=star;