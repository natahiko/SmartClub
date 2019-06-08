<?php
$login = $_REQUEST["login"];
class Person
{
    protected $age;
    protected $name;
    protected $email;

    public function __construct(array $data)
    {
        $this->age = $data['age'];
        $this->name = $data['name'];
        $this->email = $data['email'];
    }
}

define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "mysql");
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT name, age, email,image FROM Smartclub.allusers WHERE login= '$login'";
$result = $conn->query($sql);
$row = mysqli_fetch_array($result);

//echo json_encode(array(name => $row["name"],age => $row["age"], email => $row["email"]));

echo $row["name"], " ", $row["age"]," ",$row["email"]," ",$row["image"];

mysqli_close($conn);
?>
