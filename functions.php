<?php

require 'config/db.php';

function checkuser($ffname){
	$result = mysql_query("SELECT * FROM User WHERE nom='$ffname'");
	$response = mysql_num_rows($result);

	$_SESSION['PARTICIPANT'] = false; 

	if (!empty($response)) {
		$_SESSION['PARTICIPANT'] = true;   
	}
}

?>
