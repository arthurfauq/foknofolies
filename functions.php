<?php

require 'dbconfig.php';

function checkuser($ffname){
    $result = mysql_query("select * from Participants where name='$ffname'");
	$response = mysql_num_rows($result);

	$_SESSION['PARTICIPANT'] = false; 

	if (!empty($response)) {
		$_SESSION['PARTICIPANT'] = true;   
	}
}

?>
