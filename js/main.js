/*перша сторінка при загрузці завжди лєнта*/
$("#content > div").hide();
$("#home").show();


/*перехід між сторінками при натисканні на кнопки меню */
$("#home_button").click(function () {
    $("#content > div").hide();
    $("#home").show();
    document.cookie = "page=home";
});

$("#courses_button").click(function () {
    $("#content > div").hide();
    $("#courses").show();
    document.cookie = "page=courses";
});
$("#account_button").click(function () {
    $("#content > div").hide();
    $("#account").show();
    document.cookie = "page=account";
});
$("#goals_button").click(function () {
    $("#content > div").hide();
    $("#goals").show();
    document.cookie = "page=goals";
});
$("#help_button").click(function () {
    $("#content > div").hide();
    $("#help").show();
    document.cookie = "page=help";
});