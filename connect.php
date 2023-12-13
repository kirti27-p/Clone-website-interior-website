<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

//Database connection

$conn = new mysqli('localhost:3307','root','','connect');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into info(name, email, phone, message)
    values(?,?,?,?)");
    $stmt->bind_param("ssss",$name, $email, $phone, $message);
    $stmt->execute();
    echo "Data Submited Successfully...";
    $stmt->close();
    $conn->close();
}

?>