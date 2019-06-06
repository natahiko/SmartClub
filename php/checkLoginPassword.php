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

$sql = "SELECT * FROM Smartclub.allusers WHERE login= '$login' AND password= '$password' ";
$result = $conn->query($sql);

if ($result->num_rows> 0) {
    echo $result->num_rows ;
} else{
    echo "false";
}

mysqli_close($conn);

?>
