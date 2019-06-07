<?php
$login = $_REQUEST["login"];

define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "mysql");

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$sql = "SELECT * FROM Smartclub.usersGoals WHERE login= '$login'";
$result = $conn->query($sql);
//$row = mysqli_fetch_array($result);
$row = $result->fetch_assoc();
//for($i=2; $i<)
echo $row["ethics"].';'.$row["inventions"];

mysqli_close($conn);
?>
