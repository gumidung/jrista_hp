$(document).ready(function(){
    $('.link-popup').click(function(){
        // var q = new Date();
        // var m = ('0'+(q.getMonth()+1)).slice(-2);
        // var d = ('0'+q.getDate()).slice(-2);
        // var y = q.getFullYear();
        // var dateNum = y+""+m+""+d;
        //
        // if (dateNum>20151231 && dateNum<20160401)
        // {
        //     var win = window.open('http://bmsisr-public.steeprockinc.com/', '_blank');
        //     win.focus();
        // } else {
        //     if (confirm('公募期間外ですが、登録されますか？') == true) {
        //         var win2 = window.open('http://bmsisr-public.steeprockinc.com/', '_blank');
        //         win2.focus();
        //     }
        // }

         var q = new Date();
         var m = ('0'+(q.getMonth()+1)).slice(-2);
         var d = ('0'+q.getDate()).slice(-2);
         var y = q.getFullYear();
         var dateNum = y+""+m+""+d;

         if (dateNum >= 20170101 && dateNum <= 20170305)
         {
             var win = window.open('http://bmsisr-public.steeprockinc.com', '_blank');
             win.focus();
         } else {
             alert("公募期間(2017年1月～2月)以外はアクセスできません。お手数ですが公募期間内に再度アクセス下さい。");
         }

    });

});
