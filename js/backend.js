function setUserInformationInAccount() {
    $.get("./php/getUserInformation.php",{login: sessionStorage.getItem("login")}, function (data) {
        var ar = data.split(" ");
        var name = "";
        for(var i=0; i<ar.length-2; i++) {
            name += ar[i];
            if(i!=ar.length-3) name += " ";
        }
        $("#name").html(name);
        $("#age_input").val(ar[ar.length-2]);
        $("#login_input").val(sessionStorage.getItem("login"));
        $("#email_input").val(ar[ar.length-1]);
    });
    sessionStorage.setItem("course","no");
}
setUserInformationInAccount();

$("#final_register_button").click(function () {
    var email = $("#register_email").val();
    var password = $("#register-password").val();
    var password2 = $("#register-password2").val();
    var login = $("#register_login").val();
    var age = $("#register_age").val();
    var name = $("#register_name").val();
    $("#register-password2").val("");
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
    if(age=="" || age>99 || age<1){
        $("#register_age").css("background", "#FFD2D2");
        return;
    }
    if(name=="" || consistcharacters(name)){
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

$("#account_button").click(function () {
    $("#content > div").hide();
    $("#account").show();
    sessionStorage.setItem("page", "account");
    sessionStorage.setItem("entry","yes" );
    var log = sessionStorage.getItem("login");
    /*$.get("./php/getUserInformation.php",{login: log}, function (data) {
        var ar = data.split(" ");
        var name = "";
        for(var i=0; i<ar.length-2; i++) {
            name += ar[i];
            if(i!=ar.length-3) name += " ";
        }
        $("#name").html(name);
        $("#age_input").val(ar[ar.length-2]);
        $("#login_input").val(log);
        $("#email_input").val(ar[ar.length-1]);
    });*/
});

function consistcharacters(name){
    if ( !/^[a-zA-Zа-яА-ЯІі]+$/.test(name) ) return true;
    return false;
}

function insertUser(login, password, name, age, email){
    $.get("./php/addUserToDB.php",{login: login, password: password,
        name: name, age: age, email: email}, function (data) {
        $("#content > div").hide();
        $("#register_panel").hide();
        $("#home").show();
        buttonsShow();
        sessionStorage.setItem("page", "home");
        sessionStorage.setItem("entry","yes" );
        sessionStorage.setItem("login",login );
        $("#register_login").val("");
        $("#register-password2").val("");
        $("#register-password").val("");
        $("#register_age").val("");
        $("#register_email").val("");
        $("#register_name").val("");
        setUserInformationInAccount();
    });
}

$("#register_login").keypress(function () {
    $("#register_login").css("background", "#FFFFFF");
});
$("#register_age").keypress(function () {
    $("#register_age").css("background", "#FFFFFF");
});

$("#register_login").keyup(function () {
    var age  = $("#register_login").val();
    if(age>99 || age<1)
        $("#register_login").css("background", "#FFD2D2");
    else $("#register_login").css("background", "#FFFFFF");
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

    if(email=="" || email.length<13)
        $("#register_email").css("background","#FFFFFF");
    else if (validateEmail(email))
        $("#register_email").css("background","#BFFFC7");
    else
        $("#register_email").css("background","#FFD2D2");
});

$("#register_age").keyup(function () {
    var age = $("#register_age").val();
    if(age<1 || age>99)
        $("#register_age").css("background","#FFD2D2");
    else if (age=="")
        $("#register_age").css("background","#FFFFFF");
    else
        $("#register_age").css("background","#BFFFC7");
});
$("#register_name").keyup(function () {
    var name = $("#register_name").val();
    if (name=="")
        $("#register_age").css("background","#FFFFFF");
    else
        $("#register_age").css("background","#BFFFC7");
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
            sessionStorage.setItem("login",login );
            setUserInformationInAccount();
        }
    });
});

$("#age_input").keyup(function () {
    var age = $("#age_input").val();
    if(age<1 || age>99)
        $("#age_input").css("background","#FFD2D2");
    else if (age=="")
        $("#age_input").css("background","#FFFFFF");
    else
        $("#age_input").css("background","#BFFFC7");
});
$("#email_input").keyup(function () {
    var email = $("#email_input").val();

    if(email=="" || email.length<13)
        $("#email_input").css("background","#ffffff");
    else if (validateEmail(email))
        $("#email_input").css("background","#BFFFC7");
    else
        $("#email_input").css("background","#FFD2D2");
});
$("#save_account_button").click(function () {

    var age = $("#age_input").val();
    var email = $("#email_input").val();
    var login = $("#login_input").val();
    if(age=="" || email =="" || !validateEmail(email) || age<1 || age>99 || login==""){
        print("Деякі поля заповлені некоректно!");
        return;
    }
    $.get("./php/checkUser.php",{login: login}, function (data) {
        if(data=="true" && sessionStorage.getItem("login")!=login) {
            alert("Користувач з таким логіном вже існує!");
            return;
        } else{
            sessionStorage.setItem("login",login);
            closeEditAccount();
            $("#age_input").val(age);
            $("#login_input").val(login);
            $("#email_input").val(email);
            $.get("./php/changeUserInformation.php",{oldlogin: sessionStorage.getItem("login"),login: login, age: age, email: email}, function (data) {
                //
            });
        }
    });
});

function closeEditAccount(){
    $("#email_input").css("background","transparent");
    $("#age_input").css("background","transparent");
    $("#edit_account_button").css({display:'inline-block'});
    $("#delete_account_button").css({display:'none'});
    $("#save_account_button").css({display:'none'});
    $("#headingOne").hide();

    $("#age_input").attr('disabled', 'disabled');
    $("#login_input").attr('disabled', 'disabled');
    $("#email_input").attr('disabled', 'disabled');
}

$("#newpassword_change_account2").keyup(function () {
    var password = $("#newpassword_change_account").val();
    var password2 = $("#newpassword_change_account2").val();
    if(password2=="")
        $("#newpassword_change_account2").css("background","#ffffff");
    else if (password != password2)
        $("#newpassword_change_account2").css("background", "#FFD2D2");
    else
        $("#newpassword_change_account2").css("background","#BFFFC7");
});
$("#change_password_spoiler").click(function () {
    $("#oldpassword_change_account").val("");
    $("#newpassword_change_account").val("");
    $("#newpassword_change_account2").val("");
});

$("#change_password_button").click(function () {
    var oldpass = $("#oldpassword_change_account").val();
    var newpass = $("#newpassword_change_account").val();
    var newpass2 = $("#newpassword_change_account2").val();
    var login = sessionStorage.getItem("login");
    if(oldpass=="" || newpass=="" || newpass2=="" || newpass2!=newpass){
        alert("Деякі поля заповнені некоректно! Перевірте їх правильність та спробуйте ще раз");
        $("#newpassword_change_account2").val("");
        return;
    }
    $.get("./php/checkLoginPassword.php",{login: login, password: oldpass}, function (data) {
        if(data=="false"){
            alert("Старий пароль введено неправильно!");
            $("#newpassword_change_account2").val("");
            return;
        } else{
            $("#change_password_spoiler").click();
            $.get("./php/changePassword.php",{login: login, password: newpass});
            closeEditAccount();
        }
    });
});

$("#delete_account_button").click(function () {
    var really = confirm("Ви впевнені, що хочете видалити акаунт? \nПісля видалення акаунту ви " +
        "не зможете відновити пройдені курси та отримані нагороди");
    if(really){
        var login = sessionStorage.getItem("login");
        $("#exit_button").click();
        $.get("./php/deleteUserFromDB.php",{login: login});
        closeEditAccount();
    }
});