$("#final_register_button").click(function () {
     var email = $("#register_email").val();
     var password = $("#register-password").val();
     var password2 = $("#register-password2").val();
     var login = $("#register_login").val();
     var age = $("#register_age").val();
     var name = $("#register_name").val();
     if(!validateEmail(email)) {
         alert("Невірно вказана Електронна пошта!");
         return;
     }
     if(password=="" || password2!=password){
         alert("Перевірте правильність паролю!");
         return;
     }
     if(login==""){
         if(age=="")
             $("#register_age").css("background", "#FFD2D2");
         $("#register_login").css("background", "#FFD2D2");
         return;
     }
    if(age==""){
        $("#register_age").css("background", "#FFD2D2");
        return;
    }
    if(name==""){
        $("#register_name").css("background", "#FFD2D2");
        return;
    }
    $.get("./php/checkUser.php",{login: login, password: password,
    name: name, age: age, email: email}, function (data) {
        if(data=="true") {
            alert("Користувач з таким логіном вже існує!");
            return;
        } else{
            insertUser(login,password, name,age,email)
        }
    });

});

function insertUser(login, password, name, age, email){
    $.get("./php/addUserToDB.php",{login: login, password: password,
        name: name, age: age, email: email}, function (data) {
        alert(data);
        $("#content > div").hide();
        $("#register_panel").hide();
        $("#home").show();
        buttonsShow();
        sessionStorage.setItem("page", "home");
        sessionStorage.setItem("entry","yes" );
    });
}

$("#register_login").keypress(function () {
    $("#register_login").css("background", "#FFFFFF");
});
$("#register_age").keypress(function () {
    $("#register_age").css("background", "#FFFFFF");
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

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

$("#final_entry_button").click(function () {
    var login = $("#entry_login").val();
    var password = $("#entry_password").val();
    if(login=="" || password==""){
        alert("Некоректно введені логін або пароль!");
        return;
    }
    $.get("./php/checkLoginPassword.php",{login: login, password: password}, function (data) {
        if(data=="false"){
            alert("Некоректно введені логін або пароль!");
            return;
        } else{
            $("#content > div").hide();
            $("#entry_panel").hide();
            $("#home").show();
            buttonsShow();
            sessionStorage.setItem("page", "home");
            sessionStorage.setItem("entry","yes" );
        }
    });
});