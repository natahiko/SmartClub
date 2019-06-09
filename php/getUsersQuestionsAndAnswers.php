<?php
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "mysql");
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT question, answer FROM Smartclub.usersQuestions";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
while($row = $result->fetch_assoc()) {
        echo $row["question"].'#'.$row["answer"].'#';
    }
  } else echo "jfnvhjfnvhf";



echo "true";
$conn->close();
?>
