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
            "<img src='./images/" + images[i] + ".jpg'><p>" + titles[i] + "</p></button>");
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
    $("#course_title").append("<span>"+titles[i]+"<img src='./images/"+images[i]+".jpg' style='width:40%;'></span>");
    var login = sessionStorage.getItem("login");
    var course = images[i];
    $.get("./php/getUserLevelInCourse.php",{login: login, course: course},function (level) {
        $.get("./php/getCourseRulesAndImages.php",{level: level, course: course},function (data) {
            var result = data.split("#");
            if(level==1){
                for(var i=result.length-1;i>=0;i-=2)
                    $("#course_part_one").prepend("<p>" + result[i-1] + "</p><img src='"+result[i]+"'>");
            }else if(level==2){
                $("#part_two_button").removeAttr('disabled');
                for(var i=result.length-1;i>=20;i-=2)
                    $("#course_part_two").prepend("<p>" + result[i-1] + "</p><img src='"+result[i]+"'>");
                for(var i=result.length-1-20;i>=0;i-=2)
                    $("#course_part_two").prepend("<p>" + result[i-1] + "</p><img src='"+result[i]+"'>");
            } else if(level==3){
                $("#part_three_button").removeAttr('disabled');
                $("#part_two_button").removeAttr('disabled');
                for(var i=result.length-1;i>=40;i-=2)
                    $("#course_part_two").prepend("<p>" + result[i-1] + "</p><img src='"+result[i]+"'>");
                for(var i=result.length-1-20;i>=20;i-=2)
                    $("#course_part_two").prepend("<p>" + result[i-1] + "</p><img src='"+result[i]+"'>");
                for(var i=result.length-1-40;i>=0;i-=2)
                    $("#course_part_two").prepend("<p>" + result[i-1] + "</p><img src='"+result[i]+"'>");
            } else alert("test here!");
        });
    });
};

$("#open_second_part_button").click(function () {
    var login = sessionStorage.getItem("login");
    var course = sessionStorage.getItem("course");
    $("#part_one_button").click();
    if(course=="no") alert("course==no in courses.js 68line");
    $.get("./php/setUserLevelInCourse.php",{login: login, level: 2},function (data) {
        openCourse(course);
    });
});

$("#open_third_part_button").click(function () {
    third_open=true;
    fillPartThree(ethics_part_three);
    $("#part_three_button").removeAttr('disabled');
});

$("#open_test_part_button").click(function () {
    test_open=true;
   /* fillTestPart(ethics_part_two);*/
    $("#test_part_button").removeAttr('disabled');
});

function returnToAllCourses() {
    sessionStorage.setItem("course","no");
    $("#part_three_button").setAttribute('disabled');
    $("#part_two_button").setAttribute('disabled');
    $("#test_part_button").setAttribute('disabled');
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
    for(var i=0;i<titles.length;i++){
        $("#goals").append("<div class='course_medal_block'><p>"+titles[i]+"</p>" +
            "<img src='./images/bronze_cover.png' class='pulse medal_block'>" +
            "<img src='./images/silver_cover.png' class='pulse medal_block'>" +
            "<img src='./images/golden_cover.png' class='pulse medal_block'>" +
            "<img src='./images/diamond_cover.png' class='pulse medal_block'>" +
            "</div>")
    }
}