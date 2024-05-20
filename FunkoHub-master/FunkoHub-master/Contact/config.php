<?php 

$db_user = "root";
$db_pass = "";
$db_name = "ralpha";

$db = new PDO('mysql:host=localhost;dbname=' . $db_name . ';charset=utf8', $db_user, $db_pass);//PDO=PHP Data Objects
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

?>