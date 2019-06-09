<?php
$question = $_REQUEST["question"];
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "mysql");
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO Smartclub.usersQuestions (question)
VALUES ('$question')";
$result = $conn->query($sql);

echo "true";
$conn->close();
?>
