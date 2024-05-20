<?php
require_once('config.php');
?>
<?php

if(isset($_POST)){//Check whether a variable is empty. Also check whether the variable is set/declared

	$firstname 		= $_POST['firstname'];
	$lastname 		= $_POST['lastname'];
	$email 			= $_POST['email'];
	$message        =$_POST['message'];

//The INSERT INTO statement is used to insert new records in a table.
		$sql = "INSERT INTO users (firstname, lastname, email,message  ) VALUES(?,?,?,?)";//value inserted by user
		$stmtinsert = $db->prepare($sql);//prepare a sql statement for execution		
		$result = $stmtinsert->execute([$firstname, $lastname, $email, $message]);//execute parameters
		if($result){
			echo 'Successfully saved.';
		}else{
			echo 'There were erros while saving the data.';
		}
}else{
	echo 'No data';
}