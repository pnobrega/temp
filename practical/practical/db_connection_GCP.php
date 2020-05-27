<?php
/*****************************************
* This query uses the procedural interface
******************************************/

// Credentials
$dbhost = '34.89.27.133:3306';
$dbuser = 'john_root';
$dbpass = 'ThisIsAVeryLongPassword2020%!';
$dbname = 'demo';

// Create a database connection
$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// Check connection
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
    exit();
}
?>