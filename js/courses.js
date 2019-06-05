loadAllCourses();
var titles = [];
var images = [];
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
        fillCourses();
    });
}
var course_buttons=[];
var second_open=false, third_open=false, test_open=false;

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
    $("#courses_flash").hide();
    $("#current_course").show();
    $("#course_title").append("<span>"+titles[i]+"<img src='"+images[i]+"' style='width:40%;'></span>");
    var login = sessionStorage.getItem("login");
    var course = images[i];
    $.get("./php/getUserLevelInCourse.php",{login: login, course: course},function (data) {
        alert(data+" - "+course+" - "+login);
    });
};
function fillCourseListeners() {
    for(let i=0;i<titles.length;i++) {
        $("#"+id[i]).click(function () {
            $("#courses_flash").hide();
            $("#current_course").show();
            $("#course_title").append("<span>"+titles[i]+"<img src='./images/"+images[i]+".jpg' style='width:40%;'></span>");
            fillPartOne(ethics_part_one);

            if(second_open){
                fillPartTwo(ethics_part_two);
                $("#part_two_button").removeAttr('disabled');
            }
            if(third_open){
                fillPartThree(ethics_part_three);
                $("#part_three_button").removeAttr('disabled');}
            if(test_open){ $("#test_part_button").removeAttr('disabled');}

        });
    }
}

$("#open_second_part_button").click(function () {
    second_open=true;
    fillPartTwo(ethics_part_two);
    $("#part_two_button").removeAttr('disabled');
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

function fillPartOne(array){

    for(var i=array.length-1;i>=0;i--)
        $("#course_part_one").prepend("<p>" + array[i] + "</p><img src='./images/tulen.jpg'>");


}

function fillPartTwo(array){

    for(var i=array.length-1;i>=0;i--)
        $("#course_part_two").prepend("<p>" + array[i] + "</p><img src='./images/tulen2.jpg'>");


}

function fillPartThree(array){

    for(var i=array.length-1;i>=0;i--)
        $("#course_part_three").prepend("<p>" + array[i] + "</p><img src='./images/soslik.jpg'>");


}
function returnToAllCourses() {
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
fillGoals();