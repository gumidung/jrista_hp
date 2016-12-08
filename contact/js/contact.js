$(document).ready(function(){
    var select = localStorage.getItem("select");
    var name = localStorage.getItem("name");
    var affiliation = localStorage.getItem("affiliation");
    var phone = localStorage.getItem("phone");
    var content = localStorage.getItem("content");
    var email = localStorage.getItem("email");
    if(select != null) {
        $('.text-shadow').text(select);
        $('.text-shadow').addClass(' show-item');
    }
    if(name != null) {
        $('#name').val(name);
    }
    if(phone != null) {
        $('#phone').val(phone);
    }
    if(content != null) {
        $('#content').val(content);
    }
    if(email != null) {
        $('#email').val(email);
    }
    if(affiliation != null) {
        $('#affiliation').val(affiliation);
    }
    localStorage.clear();
    if (window.location.hash == "#2") {
        $(".item[data-value='2']").addClass(' show-item');
        $('.text-shadow').addClass(' show-item');
        $('.text-shadow').text($('.item[data-value="2"]').text());
    }
    if (window.location.hash == "#3") {
        $(".item[data-value='3']").addClass(' show-item');
        $('.text-shadow').addClass(' show-item');
        $('.text-shadow').text($('.item[data-value="3"]').text());
    }
    localStorage.clear();
    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+(@|＠)(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    function IsPhone(phone) {
        var regex = /^((\+|＋[1-9１２３４５６７８９]{1,4}[\-.]*)|(\([0-9０１２３４５６７８９]{2,3}\)[ \-.]*)|([0-9０１２３４５６７８９]{2,4})[ \-.]*)*?[0-9０１２３４５６７８９]{3,4}?[ \-.]*[0-9０１２３４５６７８９]{3,4}?$/;
        return regex.test(phone);
    }
    $('.cbx').click(function(){
        if ($('.menu').is(':visible') == false){
            $('.menu').addClass(' show-menu');
        } else {
            $('.menu').removeClass(' show-menu');
        }

    });
    $(document).mouseup(function (e)
    {
        var container = $('.cbx');

        if (!container.is(e.target)
            && container.has(e.target).length === 0)
        {
            if ($('.menu').is(':visible')){
                $('.menu').removeClass(' show-menu');
            }
        }
    });
    $('.item').click(function(){
        $('.item').removeClass(' show-item');
        $('.text-shadow').addClass(' show-item');
        $('.text-shadow').text($(this).text());
        $(this).addClass(' show-item');
    });
    $('#submit').click(function(){
        $('.alert-select').text("");
        $('.alert-affiliation').text("");
        $('.alert-name').text("");
        $('.alert-email').text("");
        $('.alert-content').text("");
        $('.alert-phone').text("");
        $("tbody").css("margin-top","0");
        if ($('.text-shadow.show-item').val() != undefined && $('#affiliation').val() != "" && $('#name').val() != "" && $('#email').val()!=""
            && $('#content').val() !="" &&  IsEmail($('#email').val()) && ($('#phone').val() == "" || IsPhone($('#phone').val()))) {
            localStorage.setItem("select", $('.text-shadow.show-item').text());
            localStorage.setItem("name", $('#name').val());
            localStorage.setItem("email", $('#email').val());
            localStorage.setItem("content", $('#content').val());
            localStorage.setItem("phone", $('#phone').val());
            localStorage.setItem("affiliation", $('#affiliation').val());
            window.location.href = "../confirm-contact/index.html"
        } else {
            $("tbody").css("margin-top","20px");
            if($('.text-shadow.show-item').text() === ""){
                $('.alert-select').text("お問い合わせ内容の選択は必須項目です。")
            }
            if($('#name').val() === ""){
                $('.alert-name').text("名前は必須項目です。")
            }
            if($('#email').val()==="" || !IsEmail($('#email').val())){
                $('.alert-email').text("メールアドレスは必須項目です。正しい形式で入力してください。")
            }
            if($('#content').val() ===""){
                $('.alert-content').text("お問い合わせ内容の入力は必須です。")
            }
            if($('#affiliation').val() ===""){
                $('.alert-affiliation').text("ご所属は必須項目です。")
            }
            if(!IsPhone($('#phone').val()) && $('#phone').val() != ""){
                $('.alert-phone').text("正しい形式で入力してください。")
            }

        }

    });

});
