<!DOCTYPE html>
<html>
<head>
<style>
#l{display:inline-block;
width:200px;
height:100px;
border-radius:30px;
position:absolute;
top:400px;
left:600px;
}
body{background-image:url('liblogout.jpg');
}
</style>
</head>
<body>
<?php
session_start();
?>
<h1 style="font-size:300%;text-align:center;font-family:comic sans ms;color:white;"> "Hello you are successfully logged out" </h1>
<h2 style="font-size:300%;text-align:center;font-family:comic sans ms;color:white;"> Thank you</h2>
<h3 style="font-size:300%;text-align:center;font-family:comic sans ms;color:white;"> Please visit again </h3>
<?php session_unset();
session_destroy();
?>
<form action="login.php">
<button id='l'style="font-size:300%;color:black;font-family:comic sans ms;text-decoration:none;">Login</button>
</form>