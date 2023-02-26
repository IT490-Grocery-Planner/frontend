
<?php

require_once('../lib/rabbit/path.inc');
require_once('../lib/rabbit/get_host_info.inc');
require_once('../lib/rabbit/rabbitMQLib.inc');

$client = new rabbitMQClient("../lib/rabbit/dbRabbitMQ.ini","testServer");

// error handler function
function errorHandler($errno, $errstr, $errfile, $errline)
{
   
}

?>