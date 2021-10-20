<?php
    $username=$_POST['uname'];
    $password=$_POST['psw'];
    if(($username === 'SW001') && ($password === '1234')){
        header('Location: dashboard.html');
    }
    else{echo "<h1>ERROR!</h1>";}
?>