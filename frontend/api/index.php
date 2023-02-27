<?php

require_once('../rabbit/path.inc');
require_once('../rabbit/get_host_info.inc');
require_once('../rabbit/rabbitMQLib.inc');

$client = new rabbitMQClient("../rabbit/dbRabbitMQ.ini","appServer");

$req_body = file_get_contents('php://input');
$data = json_decode($req_body, true);


try {
    $response = $client->send_request(["type" => "validateSession", "sessionID" => $data["sessionID"]]);
    $validator = json_decode($response, true);
    if(intval($validator["valid"]) != 1){
        header('HTTP/1.1 401 Unauthorized');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(array('message' => 'Invalid Session ID')));
    }
} catch (Exception $e) {
    header('HTTP/1.1 500 Internal Server Error');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode(array('message' => $e->getMessage())));
}

if (isset($data["type"])){
    try {
        $response = $client->send_request($data);
        echo $response;
    } catch (Exception $e) {
        header('HTTP/1.1 500 Internal Server Error');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(array('message' => $e->getMessage())));
    }
}

?>
