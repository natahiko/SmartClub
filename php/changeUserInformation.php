<?php
$oldlogin = $_REQUEST["oldlogin"];
$login = $_REQUEST["login"];
$age = $_REQUEST["age"];
$email = $_REQUEST["email"];

define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "mysql");

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT id FROM Smartman.users WHERE login= '$oldlogin'";
$result = $conn->query($sql);
$row = mysqli_fetch_array($result);
$id = $row["id"];

$sql = "UPDATE Smartman.users SET login='$login' WHERE id='$id'";
$result = $conn->query($sql);
$sql1 = "UPDATE Smartman.users SET age='$age' WHERE id='$id'";
$result1 = $conn->query($sql1);
$sql2 = "UPDATE Smartman.users SET email='$email' WHERE id='$id'";
$result2 = $conn->query($sql2);

echo $id;
mysqli_close($conn);
?>
