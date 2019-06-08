<?php
$login = $_REQUEST["login"];
$avatar = $_REQUEST["avatar"];

define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "mysql");

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "UPDATE Smartclub.allUsers SET image='$avatar' WHERE login= '$login'";
$result = $conn->query($sql);

echo $avatar;

mysqli_close($conn);
?>
