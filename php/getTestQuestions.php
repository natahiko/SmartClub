<?php
$course = $_REQUEST["course"];
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "mysql");
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT que1,var1,que2,var2,que3,var3,que4,var4,que5,var5,que6,var6,que7,var7,que8,var8,que9,var9,que10,var10 FROM Smartclub.tests WHERE course = '$course'";
$result = $conn->query($sql);
$row = mysqli_fetch_array($result);

echo $row["que1"].'#'.$row["var1"].'#'.$row["que2"].'#'.$row["var2"].'#'.$row["que3"].'#'.$row["var3"].'#'.$row["que4"].'#'.$row["var4"].'#';
echo $row["que5"].'#'.$row["var5"].'#'.$row["que6"].'#'.$row["var6"].'#'.$row["que7"].'#'.$row["var7"].'#';
echo $row["que8"].'#'.$row["var8"].'#'.$row["que9"].'#'.$row["var9"].'#'.$row["que10"].'#'.$row["var10"];

$conn->close();
?>
