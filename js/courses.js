loadAllCourses();
var titles = [];
var images = [];
var course_buttons=[];

function loadAllCourses() {
    $.get("./php/getAllCoursesNames.php",function (data) {
        var arr = data.split(";");
        for(var i=0; i<arr.length; i++){
            if(arr[i]=="") continue;
            var ar = arr[i].split(" ");
            titles[i] = "";
            for(var j=1; j<ar.length; j++) titles[i] += (ar[j]+" ");
            images[i] = ar[0];
        }
        fillGoals();
        fillCourses();
    });
}

function fillCourses(){
    for(let i=0;i<titles.length;i++) {
        course_buttons.push("<button class='courses_box btn thumb' onclick='openCourse("+i+")'>" +
            "<img style='height: 200px' src='./images/" + images[i] + ".jpg'><p>" + titles[i] + "</p></button>");
    }
    for(let i=0;i<titles.length;i++){
        if(i%2==0) $("#thread1").append(course_buttons[i]);
        if(i%2==1) $("#thread2").append(course_buttons[i]);
    }
}
function openCourse(i) {
    sessionStorage.setItem("course",i);
    $("#courses_flash").hide();
    $("#current_course").show();
    $("#course_title").empty();
    $("#course_title").append("<span class='course_title'>"+titles[i]+"<img src='./images/"+images[i]+".jpg' style='height: 100px'></span>");
    var login = sessionStorage.getItem("login");
    var course = images[i];
    $.get("./php/getUserLevelInCourse.php",{login: login, course: course},function (level) {
        $.get("./php/getCourseRulesAndImages.php",{level: level, course: course},function (data) {
            var result = data.split("#");
            if(level==1){
                for(var i=result.length-1;i>=0;i-=2)
                    $("#course_part_one").prepend("<p>" + result[i-1] + "</p><img style='width: 100%' src='"+result[i]+"'>");
            }else if(level==2){
                $("#part_two_button").removeAttr('disabled');
                for(var i=result.length-1;i>=20;i-=2)
                    $("#course_part_two").prepend("<img style='width: 100%' src='"+result[i]+"'><p>" + result[i-1] + "</p>");
                for(var i=result.length-1-20;i>=0;i-=2)
                    $("#course_part_one").prepend("<img style='width: 100%' src='"+result[i]+"'><p>" + result[i-1] + "</p>");
            } else {
                $("#part_three_button").removeAttr('disabled');
                $("#part_two_button").removeAttr('disabled');
                for(var i=result.length-1;i>=40;i-=2)
                    $("#course_part_three").prepend("<img style='width: 100%' src='"+result[i]+"'><p>" + result[i-1] + "</p>");
                for(var i=result.length-1-20;i>=20;i-=2)
                    $("#course_part_two").prepend("<img style='width: 100%' src='"+result[i]+"'><p>" + result[i-1] + "</p>");
                for(var i=result.length-1-40;i>=0;i-=2)
                    $("#course_part_one").prepend("<img style='width: 100%' src='"+result[i]+"'><p>" + result[i-1] + "</p>");
            }
            if(level>3){
                $("#test_part_button").removeAttr('disabled');
                alert("test here!");
            }
        });
    });
};

$("#open_second_part_button").click(function () {
    var login = sessionStorage.getItem("login");
    var course = sessionStorage.getItem("course");
    $("#part_one_button").click();
    if(course=="no") alert("course==no in courses.js 68line");
    $.get("./php/setUserLevelInCourse.php",{login: login, level: 2, course: images[course]},function (data) {
        openCourse(course);
        if(data=="changed") fillGoals();
    });

});

$("#open_third_part_button").click(function () {
    var login = sessionStorage.getItem("login");
    var course = sessionStorage.getItem("course");
    $("#part_two_button").click();
    if(course=="no") alert("course==no in courses.js 68line");
    $.get("./php/setUserLevelInCourse.php",{login: login, level: 3, course: images[course]},function (data) {
        openCourse(course);
        if(data=="changed") fillGoals();
    });
});

$("#open_test_part_button").click(function () {
    var login = sessionStorage.getItem("login");
    var course = sessionStorage.getItem("course");
    $("#part_three_button").click();
    if(course=="no") alert("course==no in courses.js 68line");
    $.get("./php/setUserLevelInCourse.php",{login: login, level: 4, course: images[course]},function (data) {
        openCourse(course);
        if(data=="changed") fillGoals();
    });
});

$("#final_test_result").click(function () {
    var login = sessionStorage.getItem("login");
    var course = sessionStorage.getItem("course");
    $("#test_part_button").click();
    if(course=="no") alert("course==no in courses.js 68line");
    $.get("./php/setUserLevelInCourse.php",{login: login, level: 5, course: images[course]},function (data) {
        openCourse(course);
        if(data=="changed") fillGoals();
    });
});

function returnToAllCourses() {
    sessionStorage.setItem("course","no");
    $("#part_three_button").attr('disabled', 'disabled');
    $("#part_two_button").attr('disabled', 'disabled');
    $("#test_part_button").attr('disabled', 'disabled');
    $("#current_course").hide();
    $("#course_title").empty();
    $("#course_part_one").empty();
    $("#course_part_two").empty();
    $("#course_part_three").empty();
    $("#courses_flash").show();
}
$("#courses_back_button").click(function () {
    returnToAllCourses();
});
function fillGoals(){
    var login = sessionStorage.getItem("login");
    $.get("./php/getUserLevels.php",{login: login},function (alllevel) {
        var res = "";
        var levels = alllevel.split(";");
        for (var i = 0; i < titles.length; i++) {
            var level = levels[i];
            res += "<div class='course_medal_block'><p>" + titles[i] + "</p>";
            if(level>1) res += "<img src='./images/bronze.png' class='pulse medal_block'>";
            else res += "<img src='./images/bronze_cover.png' class='medal_block'>";
            if(level>2) res += "<img src='./images/silver.png' class='pulse medal_block'>";
            else res += "<img src='./images/silver_cover.png' class='medal_block'>";
            if(level>3) res += "<img src='./images/golden.png' class='pulse medal_block'>";
            else res += "<img src='./images/golden_cover.png' class='medal_block'>";
            if(level>4) res += "<img src='./images/diamond.png' class='pulse medal_block'>";
            else res += "<img src='./images/diamond_cover.png' class='medal_block'>";
            res += "</div>";
        }
        $("#goals").empty();
        $("#goals").append("<div class='title slogan text-center'><img src='images/medal.gif\' style='width:8%;'> Мої досягнення <img src='images/medal.gif' style='width:8%;'></div>\n");
        $("#goals").append(res);
    });
}