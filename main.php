<?php
        include 'session.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php 
                echo "รหัสสมาชิก: ".$_SESSION['login_id'];
                echo "<br>";
                echo "ยินดีต้อนรับคุณ $s_login_username อีเมล์ $s_login_email" ;
        ?>
        <hr>
        <a href="logout.php">ออกจากระบบ</a>
    </body>
</html>
