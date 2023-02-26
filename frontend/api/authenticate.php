<?php

require_once('../rabbit/path.inc');
require_once('../rabbit/get_host_info.inc');
require_once('../rabbit/rabbitMQLib.inc');

$client = new rabbitMQClient("../rabbit/dbRabbitMQ.ini","testServer");

$req_body = file_get_contents('php://input');
$data = json_decode($req_body, true);

if (isset($data["type"]) && $data["type"] == 'validateSession'){
    try {
        $response = $client->send_request($data);
        echo $response;
    } catch (Exception $e) {
        header('HTTP/1.1 500 Internal Server Error');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(array('message' => $e->getMessage())));
    }
} else if(isset($data["type"]) && isset($data["email"]) && isset($data["password"]) &&
($data["type"] != '' && $data["email"] != '' && $data['password'] != '')){
    if($data["type"] == "register" && (!isset($data["fname"]) || !isset($data["lname"]) || !isset($data["password2"]))){
        header('HTTP/1.1 400 Bad Request');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(array('message' => 'Missing Fields')));
    } else {

        if($data["type"] == "register" && $data["password"] != $data["password2"]){
            header('HTTP/1.1 400 Bad Request');
            header('Content-Type: application/json; charset=UTF-8');
            die(json_encode(array('message' => 'Passwords Must Match')));
        }

        try {
            $response = $client->send_request($data);
            $res_obj = json_decode($response, true);
            if(isset($res_obj['sessionID'])){
                echo $response;
            } else {
                header('HTTP/1.1 400 Bad Request');
                header('Content-Type: application/json; charset=UTF-8');
                die($response);
            }
        } catch (Exception $e) {
            header('HTTP/1.1 500 Internal Server Error');
            header('Content-Type: application/json; charset=UTF-8');
            die(json_encode(array('message' => $e->getMessage())));
        }
        
        
    }
} else {
    header('HTTP/1.1 400 Bad Request');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode(array('message' => 'Missing Credentials')));
}

?>
