<?php
$login = $_REQUEST["login"];
$course = $_REQUEST["course"];
$level = $_REQUEST["level"];

define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "mysql");

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT $course FROM Smartclub.usersGoals WHERE login= '$login'";
$result = $conn->query($sql);
$row = mysqli_fetch_array($result);
$oldlevel = $row[$course];

if ($oldlevel<$level) {
  echo "changed";
  $sql = "UPDATE Smartclub.usersGoals SET $course = '$level' WHERE login= '$login'";
  $result = $conn->query($sql);
} else echo "ok";

mysqli_close($conn);
?>
