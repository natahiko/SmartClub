<?php
header('Content-Type: text/html; charset=utf-8');

$course = $_REQUEST["course"];
$level = $_REQUEST["level"];

define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "mysql");
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT rule1, img1, rule2, img2, rule3, img3, rule4, img4, rule5, img5, rule6, img6, rule7, img7, rule8, img8, rule9, img9, rule10, img10 FROM Smartclub.courses WHERE name = '$course' AND level = 1 ";
$result = $conn->query($sql);
$row = mysqli_fetch_array($result);
echo $row['rule1'].'#'.$row['img1'].'#'.$row['rule2'].'#'.$row['img2'].'#'.$row['rule3'].'#'.$row['img3'].'#'.$row['rule4'].'#'.$row['img4'].'#';
echo $row['rule5'].'#'.$row['img5'].'#'.$row['rule6'].'#'.$row['img6'].'#'.$row['rule7'].'#'.$row['img7'].'#'.$row['rule8'].'#'.$row['img8'].'#';
echo $row['rule9'].'#'.$row['img9'].'#'.$row['rule10'].'#'.$row['img10'];

if($level>1){
  $sql2 = "SELECT rule1, img1, rule2, img2, rule3, img3, rule4, img4, rule5, img5, rule6, img6, rule7, img7, rule8, img8, rule9, img9, rule10, img10 FROM Smartclub.courses WHERE name = '$course' AND level = 2 ";
  $result2 = $conn->query($sql2);
  $row2 = mysqli_fetch_array($result2);
  echo $row2['rule1'].'#'.$row2['img1'].'#'.$row2['rule2'].'#'.$row2['img2'].'#'.$row2['rule3'].'#'.$row2['img3'].'#'.$row2['rule4'].'#'.$row2['img4'].'#';
  echo $row2['rule5'].'#'.$row2['img5'].'#'.$row2['rule6'].'#'.$row2['img6'].'#'.$row2['rule7'].'#'.$row2['img7'].'#'.$row2['rule8'].'#'.$row2['img8'].'#';
  echo $row2['rule9'].'#'.$row2['img9'].'#'.$row2['rule10'].'#'.$row2['img10'];
}

if($level>2){
  $sql3 = "SELECT rule1, img1, rule2, img2, rule3, img3, rule4, img4, rule5, img5, rule6, img6, rule7, img7, rule8, img8, rule9, img9, rule10, img10 FROM Smartclub.courses WHERE name = '$course' AND level = 3 ";
  $result3 = $conn->query($sql3);
  $row3 = mysqli_fetch_array($result3);
  echo $row3['rule1'].'#'.$row3['img1'].'#'.$row3['rule2'].'#'.$row3['img2'].'#'.$row3['rule3'].'#'.$row3['img3'].'#'.$row3['rule4'].'#'.$row3['img4'].'#';
  echo $row3['rule5'].'#'.$row3['img5'].'#'.$row3['rule6'].'#'.$row3['img6'].'#'.$row3['rule7'].'#'.$row3['img7'].'#'.$row3['rule8'].'#'.$row3['img8'].'#';
  echo $row3['rule9'].'#'.$row3['img9'].'#'.$row3['rule10'].'#'.$row3['img10'];
}

$conn->close();
?>
