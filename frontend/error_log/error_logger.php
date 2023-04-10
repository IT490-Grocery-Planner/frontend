#!/usr/bin/php
<?php
require_once('../rabbit/path.inc');
require_once('../rabbit/get_host_info.inc');
require_once('../rabbit/rabbitMQLib.inc');

// Error logging function
function logerror($type,$error){
 
  $error_log_name = $type.".txt"; // Gets relevant error log file from error type
  $file_data = $error . '\n' . file_get_contents($error_log_name); // prepend current error to lo file's current content 
  file_put_contents($error_log_name, $file_data); // Write new content back to error log
  return json_encode(["message" => "Error Logged"]); 
}
function requestProcessor($request)
{
  echo "received request".PHP_EOL;
  var_dump($request);
  if(!isset($request['type']))
  {
    return "ERROR: unsupported error type";
  }
  switch ($request['type'])
  {
    case "DBerrors":
    case "Frontenderrors":
    case "DMZerrors":
    case "RabbitMQerrors":
        return logerror($request['type'], $request['error']);
      
  }
  return array("returnCode" => '0', 'message'=>"unsupported error type");
}

$server = new rabbitMQServer("../rabbit/errorRabbitMQ.ini","errorServer");

echo "Error Logger BEGIN".PHP_EOL;
$server->process_requests('requestProcessor');
echo "Error Logger END".PHP_EOL;
exit();

?>