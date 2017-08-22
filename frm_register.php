<html>

<head>
  <meta charset="utf-8">
  <title>Smart-Fram</title>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700|Lato:400,100,300,700,900" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="css/animate.css">
  <!-- Custom Stylesheet -->
  <link rel="stylesheet" href="css/style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
</head>

<body>
  <div class="container">
    <div class="top"> </div>
    <form action="register.php" method="POST">
      <div class="login-box animated fadeInUp">
        <div class="box-header">
          <h2>SING UP</h2>
        </div> <label for="username">Username</label>
        <br>
        <input type="text" autofocus="" name="username" required="" id="username">
        <br> <label for="password">Password</label>
        <br>
        <input type="password" id="password" name="password" required="">
        <br> <label for="email">E-mail</label>
        <br>
        <input type="email" name="email" placeholder="example@domain.com" required="">
        <button type="submit" value="ลงทะเบียน">Create An Account</button>
        <br>
        <br>
        <hr>
        <p class="small">Already have an account?
          <a href="index.php"> Sing in</a>
        </p>
      </div>
    </form>
    <script>
      $(document).ready(function () {
          	$('#logo').addClass('animated fadeInDown');
          	$("input:text:visible:first").focus();
      	});
      	$('#username').focus(function() {
      		$('label[for="username"]').addClass('selected');
      	});
      	$('#username').blur(function() {
      		$('label[for="username"]').removeClass('selected');
      	});
      	$('#password').focus(function() {
      		$('label[for="password"]').addClass('selected');
      	});
      	$('#password').blur(function() {
      		$('label[for="password"]').removeClass('selected');
      	});
    </script>
  </div>
</body>

</html>