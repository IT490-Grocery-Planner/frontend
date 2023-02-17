<?php
session_start();

require_once('../lib/rabbit/path.inc');
require_once('../lib/rabbit/get_host_info.inc');
require_once('../lib/rabbit/rabbitMQLib.inc');

$client = new rabbitMQClient("../lib/rabbit/testRabbitMQ.ini","testServer");

if(isset($_POST["type"]) && isset($_POST["email"]) && isset($_POST["password"])){
    if($_POST["type"] == "register" && (!isset($_POST["fname"]) || !isset($_POST["lname"]) || !isset($_POST["password2"]))){
        $_SESSION["error_msg"] = "Missing Credentials";
        header("Location: index.php");
    } else {

        if($_POST["type"] == "register" && $_POST["password"] != $_POST["password2"]){
            $_SESSION["error_msg"] = "Passwords Must Match";
            header("Location: index.php");
        }

        $response = $client->send_request($request);

        $res_obj = json_decode($response, true);

        if(intval($res_obj["logged"]) == 1){
            $_SESSION["user"] = $res_obj;
            header("Location: ../home.php");
        } else {
            $_SESSION["error_msg"] = "Wrong username or password";
            header("Location: index.php");
        }
    }
} else {
    $_SESSION["error_msg"] = "Missing Credentials";
    header("Location: index.php");
}




?>
