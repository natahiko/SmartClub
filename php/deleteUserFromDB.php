<?php
$login = $_REQUEST["login"];
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "mysql");

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "DELETE FROM Smartclub.allusers WHERE login='$login'";
$result = $conn->query($sql);

echo "ok";
mysqli_close($conn);
?>
