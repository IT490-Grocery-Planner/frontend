<?php
session_start();

require_once('../lib/rabbit/path.inc');
require_once('../lib/rabbit/get_host_info.inc');
require_once('../lib/rabbit/rabbitMQLib.inc');


$client = new rabbitMQClient("../lib/rabbit/testRabbitMQ.ini","testServer");

$req_body = file_get_contents('php://input');
$data = json_decode($req_body, true);

if(isset($data["type"]) && isset($data["email"]) && isset($data["password"])){
    if($data["type"] == "register" && (!isset($data["fname"]) || !isset($data["lname"]) || !isset($data["password2"]))){
        $_SESSION["error_msg"] = "Missing Credentials";
        header("Location: index.php");
    } else {

        if($data["type"] == "register" && $data["password"] != $data["password2"]){
            $_SESSION["error_msg"] = "Passwords Must Match";
            header("Location: index.php");
        }

        $response = $client->send_request($request);

        if(intval($res_obj["logged"]) == 1){
            echo $response;
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
