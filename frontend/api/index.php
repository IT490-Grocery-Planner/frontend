<?php

require_once('../rabbit/path.inc');
require_once('../rabbit/get_host_info.inc');
require_once('../rabbit/rabbitMQLib.inc');

$client = new rabbitMQClient("../rabbit/dbRabbitMQ.ini","appServer");
$errLogClient = new rabbitMQClient("../rabbit/dbRabbitMQ.ini","errorLogging");

$req_body = file_get_contents('php://input');
$data = json_decode($req_body, true);

if (isset($data["type"])){
    try {
        $response = $client->send_request($data);
        echo $response;
    } catch (Exception $e) {
        $errLogClient->send_request(['type' => 'Frontenderrors', 'error' => $e->getMessage()]);
        header('HTTP/1.1 500 Internal Server Error');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(array('message' => $e->getMessage())));
    }
}

?>
