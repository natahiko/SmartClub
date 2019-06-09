<?php
$answer = "На сторінці профілю натисіть на кнопку Редагувати контакт і з^явиться кнопка зміни паролю";
$questionID = "7";
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "mysql");
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "UPDATE Smartclub.usersQuestions SET answer='$answer' WHERE id = '$questionID'";
$result = $conn->query($sql);

echo "ok";

$conn->close();
?>
