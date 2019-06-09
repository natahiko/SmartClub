const question = "Не можете знайти відповідь? "+"<br>"+" Зв'яжіться з нами!";

const answers = [
    'Напишіть нам',
    'Сайт не зберігає ніякої особистої інформації, реєстрація потрібна тільки для збереження інформації про те, на якому місці курсу ви зупинилися та здобутих нагород',
    'Система нагород розроблена з метою заохочення дитини до самостійного навчання, дизайн сайту інтуїтивно зрозумілий, курси містять багато зображень. Єдина вимога до дитини - вміти читати та хотіти вчитись.',
    'Тоді ви можете проходити курс разом, читаючи їй вголос і показуючи ілюстрації. Так засвоєння інформації буде ще кращим.',
    'На сторінці профілю натисіть на кнопку "Редагувати контакт" і з\'явиться кнопка зміни паролю',
    'Матеріали курсу можна повторно переглядати скільки завгодно разів, так само як і проходити тести'];

function fill_questions(){

    $("#help_thread1").empty();
        $.get("./php/getUsersQuestionsAndAnswers.php",function (data) {
            var array = data.split("#");
            $("#help_thread1").append("<div class='question_board'><p class='quest'>" + question + "</p><hr color=' #303030'><textarea class='form-control' rows='3' id='client_question'></textarea><button class='btn btn-info ' onclick='sendMessage()' id='send_mess_button'>Відправити</button></div>");
            for(let i=0, j=0;i<array.length-1;i+=2) {
                if(array[i+1]=="") continue;
                 if (j % 3 === 2) {
                    $("#help_thread1").append("<div class='question_board'><p class='quest'>" + array[i] + "</p><hr><p>" + array[i+1] + "</p></div>");
                }
                if (j % 3 === 0) {
                    $("#help_thread2").append("<div class='question_board'><p class='quest'>" + array[i] + "</p><hr><p >" + array[i+1] + "</p></div>");
                }
                if (j % 3 === 1) {
                    $("#help_thread3").append("<div class='question_board'><p class='quest'>" + array[i] + "</p><hr><p >" + array[i+1] + "</p></div>");
                }
                j++;
            }
        });
}
fill_questions();
$("#help_button").click(function () {
    //fill_questions();
    $("#content > div").hide();
    $("#help").show();
    sessionStorage.setItem("page", "help");
    sessionStorage.setItem("entry","yes" );
    closeEditAccount();
});
function sendMessage(){
    var text = $("#client_question").val();
    if(text==""){
        alert("Пусте питання не може бути відправлене на опрацювання!");
        return;
    }
    $.get("./php/sendUserQuestion.php",{question: text},function (data) {
        if(data=="true"){
            alert("Ваше питання відправлене на опрацювання, відповідь скоро з'явиться у вікні підтримки!");
            $("#client_question").val("");
        } else alert("При выдправці вашого запиту сталася помилка, спробуйте ще!");
    });
}
/*
$("#send_mess_button").click(function () {

});*/
