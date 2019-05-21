$("#final_register_button").click(function () {
    var email = $("#register_email").val();
    if(!validateEmail(email)) {
        alert("Невірно вказана Електронна пошта!");
        return;
    }
    var password = $("#register-password").val();
    var password2 = $("#register-password2").val();
    if(password=="" || password2!=password){
        alert("Перевірте правильність паролю!");
        return;
    }
    var login = $("#register_login").val();
    $.get("./php/checkUser.php?login="+login, function (data) {
        if(data=='true') {
            alert("Користувач з таким логіном вже існує!");
            return;
        } //else alert(data);

    });
});

$("#register-password2").keyup(function () {
    var password = $("#register-password").val();
    var password2 = $("#register-password2").val();
    if(password2=="")
        $("#register-password2").css("background","#FFFFFF");
    else if (password != password2)
        $("#register-password2").css("background", "#FFD2D2");
    else
        $("#register-password2").css("background","#BFFFC7");
});

$("#register_email").keyup(function () {
    var email = $("#register_email").val();
    if(email=="")
        $("#register_email").css("background","#FFFFFF");
    else if (validateEmail(email))
        $("#register_email").css("background","#BFFFC7");
    else
        $("#register_email").css("background","#FFD2D2");
});

function validateEmail(email) {
    var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return pattern .test(email);
}