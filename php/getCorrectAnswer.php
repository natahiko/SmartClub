<?php
$course = $_REQUEST["course"];
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "mysql");
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9,ans10 FROM Smartclub.tests WHERE course = '$course'";
$result = $conn->query($sql);
$row = mysqli_fetch_array($result);

echo $row["ans1"].'#'.$row["ans2"].'#'.$row["ans3"].'#'.$row["ans4"].'#'.$row["ans5"].'#';
echo $row["ans6"].'#'.$row["ans7"].'#'.$row["ans8"].'#'.$row["ans9"].'#'.$row["ans10"];

$conn->close();
?>
