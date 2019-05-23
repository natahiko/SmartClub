<?php

$login = $_REQUEST["login"];
$password = $_REQUEST["password"];
$name = $_REQUEST["name"];
$age = $_REQUEST["age"];
$email = $_REQUEST["email"];

define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "mysql");

// Create connection
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO Smartman.users (login, password, name, age, email) 
VALUES ('$login', '$password', '$name','$age', '$email');";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>