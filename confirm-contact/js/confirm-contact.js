$(document).ready(function(){
    var previousPage = document.referrer;
    var page = previousPage.substring(previousPage.length-18,previousPage.length);
    if (page === "contact/index.html") {
        var select = localStorage.getItem("select");
        var name = localStorage.getItem("name");
        var phone = localStorage.getItem("phone");
        var content = localStorage.getItem("content");
        var email = localStorage.getItem("email");
        var affiliation = localStorage.getItem("affiliation");
        email = email.toHalfwidth();
        var emailEscape = email.replace("@", "\\@");
        if (select == null || name == null || phone == null || content == null || email == null) {
            window.location.href = "../contact/index.html"
        } else {
            $('#select').text(select);
            $('#name').text(name);
            $('#phone').text(phone);
            $('#content').text(content);
            $('#email').text(email);
            $('#affiliation').text(affiliation);
            $('#affiliation-invisible').val(affiliation);
            $('#select-invisible').val(select);
            $('#name-invisible').val(name);
            $('#phone-invisible').val(phone);
            $('#content-invisible').val(content);
            $('#email-invisible').val(email);
            $('#emailEscape').val(emailEscape);
        }
    } else {
        localStorage.clear();
        window.location.href = "../contact/index.html"
    }
    $('#back').click(function(){
        localStorage.setItem("select", select);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("content", content);
        localStorage.setItem("phone", phone);
        localStorage.setItem("affiliation", affiliation);
        window.location.href = "../contact/index.html"
    });
});
