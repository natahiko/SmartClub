<?php
$login = $_REQUEST["login"];
$password = $_REQUEST["password"];

define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "mysql");
$password = sha1($password);

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$sql = "UPDATE Smartclub.allusers SET password='$password' WHERE login='$login'";
$result = $conn->query($sql);

echo "ok";
mysqli_close($conn);
