<?php
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'techxcellence';
$table = 'cebu_schools';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM $table";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = array();

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    $result->close();

    $conn->close();

    $json_data = json_encode($data);

    header('Content-Type: application/json');

    echo $json_data;
} else {
    echo "[]";
}
?>