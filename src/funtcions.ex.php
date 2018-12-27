<?php

define('DB_SERVER', '');
define('DB_USERNAME', '');
define('DB_PASSWORD', '');
define('DB_DATABASE', '');

function checkuser($ffname)
{
 $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

 mysqli_set_charset($link, 'utf8');

 if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
 }

 $query = "SELECT * FROM user WHERE nom like '%$ffname%'";

 $result = mysqli_query($link, $query);
 $response = mysqli_num_rows($result);

 $_SESSION['PARTICIPANT'] = false;

 if (!empty($response)) {
  $_SESSION['PARTICIPANT'] = true;
 }
}
