<?php

define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "mysql");

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);
mysql_set_charset("utf8");
//mysql_query(«SET NAMES utf8»);


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT name, fullname FROM Smartman.courses WHERE level=1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo $row["name"]. " " . $row["fullname"].";";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
