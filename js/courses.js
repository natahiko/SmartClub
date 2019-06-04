var titles=["Уроки етикету","Весела математика","Знайомимося з англійською",
    "Правила дорожнього руху","Цікавинки для допитливих"];
var images=["./images/etics.jpg","./images/maths.jpg","./images/eng.jpg",'./images/car.jpg',"./images/interesting.jpg"];
var id=['c1','c2','c3','c4','c5'];
var course_buttons=[];
var second_open=false, third_open=false, test_open=false;

var ethics_part_one=["Завжди будь ввічливим, не забувай казати дякую та будь-ласка, коли про щось просиш або отримуєш допомогу."
,"«Стався до людей так, як хотів би щоб вони ставились до тебе!» - ці слова також називають золотим правилом моралі, якщо ти будеш ставитися до людей з добром, то вони тобі віддячать тим самим!"
,"Допомагай оточуючим. Не відмовляй у допомозі батькам чи друзям, коли тебе про це просять, пам’ятай, що сьогодні ти допоможеш комусь, а завтра допоможуть тобі."
,"За столом, користуйся лише відповідними приборами, не замінюй їх руками чи сторонніми предметами, а руки та рот витирай лише серветкою!"
,"Перед їжею завжди мий руки з милом, а під час їжі намагайся не розмовляти. Якщо хочеш щось сказати за столом, то не говори з набитим ротом, пережуй і лише потім починай розмову."
,"Не лишай сміття будь-де, сміття необхідно викидати у спеціальні урни та контейнери, а не посеред вулиці. Турбуйся про чистоту вулиць, щоб у майбутньому насолоджуватись запахами квітів, а не сміття."
,"Обов’язково вітайся при зустрічі з знайомими тобі людьми. Своїм одноліткам кажи «Привіт!», а старшим людям краще казати «Доброго дня», щоб виказати свою повагу."
,"Щоб прийти до когось в гості треба мати запрошення, якщо хочеш сам відвідати когось, то про свій візит треба попередити заздалегідь. А прийшовши в гості не треба бігати по дому або зазирати у всі кімнати, шафи чи тумбочки."
,"Перебуваючи в гостях, не треба відкрито висловлювати невдоволення щодо хазяїнів будинку, самого помешкання або частування, яким тебе пригощають, це вважається поганою манерою."
,"Перед початком прийому їжі бажай всім приємного апетиту, а в кінці трапези дякуй всім за чудовий сніданок, обід чи вечерю. Також можна особливо висловити подяку, тому хто готував, сказавши, що все було надзвичайно смачно!"];

var ethics_part_two=["Слідкуй за чистотою своєї мови. Не вживай слів-паразитів таких як: «типу», «короче» та ін., також не потрібно мугикати коли ти розмовляєш або думаєш, для оточуючих це може бути неприємно."
    ,"Не пліткуй і не обговорюй інших людей, якщо їх немає поруч. Пам’ятай, краще висловити своє невдоволення щодо певної людини їй особисто, ніж обговорювати це за її спиною.",
    "Перебуваючи в людних місцях, не відходь далеко від своїх батьків та слухайся їх. Якщо ти пішов в кінотеатр чи театр, під час представлення утримуйся від коментарів чи голосних рухів.",
    "Коли ти хочеш проїхатись у міському транспорті, спочатку необхідно випустити людей, які виходять, а лише потім заходити, також не варто стояти біля дверей, якщо ти не збираєшся виходити на наступній зупинці."
    ,"Якщо заходячи в міський транспорт ти маєш на плечах рюкзак його потрібно зняти і тримати в руках, це не лише позбавить інших людей дискомфорту, але й збереже твої речі від крадіїв."
    ,"У транспорті заборонено їсти, пити чи кричати! Натомість треба поступатись місцем людям похилого віку або інвалідам."
    ,"Заходячи в будь-яке приміщення дівчат та жінок треба пропускати вперед, якщо це необхідно притримай двері для людей похилого віку або інвалідів, пропустивши їх також вперед."
    ,"В ліфт першими заходять дорослі, а от виходять першими діти, спочатку випускаючи дівчаток, а якщо тобі необхідно на 2 поверх краще взагалі відмовитись від ліфту. Таке правило виникло з метою безпеки."
    ,"Якщо ти йдеш не сам і хтось з твого оточення привітався з незнайомою тобі людиною, ти також маєш з нею привітатись, при цьому краще обрати ввічливу форму «Доброго дня» і звертатись до незнайомця на «Ви»."
    ,"Завжди будь чистим та охайним, особливо дбай про чистоту свого взуття та не носи одяг на якому є плями, охійність – одне з важливих правил етичної людини."];

var ethics_part_three=["Прийшовши в кіно, театр, на концерт, до своїх місць потрібно йти обличчям до тих, хто уже сидить. Першим проходить чоловік."
    , "Ким би ви не були, директор, академік, жінка похилого віку або школяр, коли ви входите в кімнату, то повинні привітатися першими."
    ,"В людних місцях говори тихо та не смійся голосно, також не потрібно витріщатися або розглядати інших людей – це може бути образливо. Також не можна переривати чужі бесіди своїми коментарями, навіть якщо це дуже важлива інформація."
    ,"Здійснюючи покупку в магазині, не варто втомлювати продавця дрібними капризами або тривалою нерішучістю. Підходячи до каси, тримай напоготові приблизну суму грошей, необхідних для покупки, а не шукати їх в гаманці або кишені в останній момент."
    ,"Заходячи в приміщення чоловік повинен зняти капелюха та перчатки, але дівчина може їх залишити, натомість шапку і рукавиці потрібно знімати всім."
    ,"За правилами етикету деякі продукти за загальним столом можна їсти руками. До них відносяться: хліб, бутерброди, сендвічі, піца, канапе, пиріжки, печиво, тверді тістечка, фрукти, ягоди з черешками. "
    ,"Якщо хтось поводиться неввічливо по відношенню до тебе або твоїх супутників, не варто опускатися до його рівня і відповідати грубістю на грубість. Краще виховувати гідною поведінкою і власним прикладом."
    ,"Ніколи не бійтесь перепитувати, якщо ви забули ім'я співрозмовника: люди розуміють, що іноді діти можуть забувати імена. З усіма таке буває. У цьому випадку цілком прийнятна фраза: «Вибачте, я не можу пригадати ваше ім'я, не могли б ви мені його нагадати?»."
    ,"Якщо ви прийшли в гості, не поспішайте відразу ж сідати за стіл. Зачекайте, поки господиня запросить вас, можливо, вам запропонують попередньо визначене місце. Якщо цього не відбувається, можете самі делікатно уточнити, де вам краще сісти."
    ,"За столом треба сидіти випроставшись і злегка спираючись на спинку крісла. У жодному випадку не можна розгойдуватися на стільці чи класти лікті на стіл. Крім того, що це має неестетичний вигляд, ви можете поламати меблі і навіть впасти, а руки краще покласти на коліна, на столі можуть знаходитися тільки кисті рук."
];

function fillCourses(){
    for(let i=0;i<titles.length;i++) {
        course_buttons.push("<button class='courses_box btn thumb' id='"+id[i]+"'><img src='" + images[i] + "'><p>" + titles[i] + "</p></button>");
    }
    for(let i=0;i<titles.length;i++){
        if(i%2==0) $("#thread1").append(course_buttons[i]);
        if(i%2==1) $("#thread2").append(course_buttons[i]);
    }
}
function fillCourseListeners() {
    for(let i=0;i<titles.length;i++) {
        $("#"+id[i]).click(function () {
            $("#courses_flash").hide();
            $("#current_course").show();
            $("#course_title").append("<span>"+titles[i]+"<img src='"+images[i]+"' style='width:40%;'></span>");
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

fillCourses();
fillCourseListeners();



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