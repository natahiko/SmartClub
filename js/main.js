/*перша сторінка при загрузці*/
    $("#content > div").hide();
    $("#entry_panel").hide();
    $("#register_panel").hide();
    $("#headingOne").hide();
if(sessionStorage.getItem("page")==null) sessionStorage.setItem("page","home");
if(sessionStorage.getItem("entry")==null) sessionStorage.setItem("entry","no");
    $("#"+sessionStorage.getItem("page")).show();
    if(sessionStorage.getItem("entry")=="no") buttonsHide();
    else if(sessionStorage.getItem("entry")=="yes") buttonsShow();

/*перехід між сторінками при натисканні на кнопки меню */
$("#home_button").click(function () {
    $("#content > div").hide();
    $("#home").show();
    sessionStorage.setItem("page", "home");
    sessionStorage.setItem("entry","yes" );
    closeEditAccount();
});

$("#courses_button").click(function () {
    $("#content > div").hide();
    $("#courses").show();
    sessionStorage.setItem("page", "courses");
    sessionStorage.setItem("entry","yes" );
    closeEditAccount();
    returnToAllCourses();
});
$("#second_course_button").click(function () {
    $("#courses_button").click();
});
$("#goals_button").click(function () {
    $("#content > div").hide();
    $("#goals").show();
    sessionStorage.setItem("page", "goals");
    sessionStorage.setItem("entry","yes" );
    closeEditAccount();
});
$("#second_goals_button").click(function () {
    $("#goals_button").click();
});
$("#help_button").click(function () {
    $("#content > div").hide();
    $("#help").show();
    sessionStorage.setItem("page", "help");
    sessionStorage.setItem("entry","yes" );
    closeEditAccount();
});

$("#exit_button").click(function () {
    $("#content > div").hide();
    $("#home").show();
    buttonsHide();
    sessionStorage.setItem("page", "home");
    sessionStorage.setItem("entry","no" );
    sessionStorage.setItem("login",null );
    closeEditAccount();

});

$("#entry_button").click(function () {
    $("#entry_panel").show();
    $("#entry_login").val("");
    $("#entry_password").val("");
    $("#entry_panel").css("z-index","1000");

});
$("#register_button").click(function () {
    $("#register_panel").show();
    $("#register_panel").css("z-index","1000");
    $("#register_login").val("");
});
$("#back_entry_button").click(function () {
    $("#entry_panel").hide();
    $("#entry_panel").css("z-index","-1");
});
$("#back_register_button").click(function () {
    $("#register_panel").hide();
    $("#register_panel").css("z-index","-1");
});
function buttonsHide(){
    $("#menu > a").hide();
    $("#entry_button").show();
    $("#register_button").show();
}
function buttonsShow() {
    $("#menu > a").hide();
    $("#home_button").show();
    $("#account_button").show();
    $("#courses_button").show();
    $("#goals_button").show();
    $("#help_button").show();
    $("#exit_button").show();
}


/*edit profile button*/
$("#edit_account_button").click(function () {
    $("#edit_account_button").hide();
    $("#delete_account_button").css(
        {display:'inline-block'});
    $("#headingOne").show();
    $("#save_account_button").css(
        {display:'inline-block'});
    $("#age_input").removeAttr('disabled');
    $("#login_input").removeAttr('disabled');
    $("#email_input").removeAttr('disabled');
});

