/*перша сторінка при загрузці*/
$("#content > div").hide();
$("#entry_panel").hide();
$("#register_panel").hide();
$("#"+getCookie("page")).show();
if(getCookie("entry")!=="yes") buttonsHide();
else if(getCookie("entry")==="yes") buttonsShow();

/*перехід між сторінками при натисканні на кнопки меню */
$("#home_button").click(function () {
    $("#content > div").hide();
    $("#home").show();

    document.cookie = "page=home,entry=yes";
});

$("#courses_button").click(function () {
    $("#content > div").hide();
    $("#courses").show();
    document.cookie = "page=courses,entry=yes";
});
$("#account_button").click(function () {
    $("#content > div").hide();
    $("#account").show();
    document.cookie = "page=account,entry=yes";
});
$("#goals_button").click(function () {
    $("#content > div").hide();
    $("#goals").show();
    document.cookie = "page=goals,entry=yes";
});
$("#help_button").click(function () {
    $("#content > div").hide();
    $("#help").show();
    document.cookie = "page=help,entry=yes";
});

$("#exit_button").click(function () {
    $("#content > div").hide();
    $("#home").show();
    buttonsHide();
    document.cookie = "page=home,entry=no";

});

$("#entry_button").click(function () {
    $("#entry_panel").show();

});
$("#register_button").click(function () {
    $("#register_panel").show();

});
$("#back_entry_button").click(function () {
    $("#entry_panel").hide();
});
$("#back_register_button").click(function () {
    $("#register_panel").hide();
});
$("#final_entry_button").click(function () {
    $("#content > div").hide();
    $("#entry_panel").hide();
    $("#home").show();
    buttonsShow();
    document.cookie = "page=home,entry=yes";

});
$("#final_register_button").click(function () {
    $("#content > div").hide();
    $("#register_panel").hide();
    $("#home").show();
    buttonsShow();
    document.cookie = "page=home,entry=yes";

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

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(',');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}