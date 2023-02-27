
<?php

require_once('../rabbit/path.inc');
require_once('../rabbit/get_host_info.inc');
require_once('../rabbit/rabbitMQLib.inc');

$client = new rabbitMQClient("../rabbit/dbRabbitMQ.ini","errorLogger");

// error handler function
function errorHandler($errno, $errstr, $errfile, $errline)
{
   
}

?>