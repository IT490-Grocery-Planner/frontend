<?php 
session_start(); 
$user = $_SESSION["user"];
if(isset($user) && $user["logged"] == 1){
    header("Location: ../index.php");
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<title>Login Page</title>
</head>

<body>
<?php if(isset($_SESSION["error_msg"])): ?>
<div class="alert alert-danger" role="alert">
	<?= $_SESSION["error_msg"]; ?>
</div>
<?php unset($_SESSION['error_msg']); ?>
<?php endif; ?>

		
	<div class="card mx-auto p-3 mt-5 shadow-sm" style="width: 20rem;">
		
		<ul class="nav nav-tabs" id="myTab" role="tablist">
			<li class="nav-item" role="presentation">
				<button class="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login_form" type="button" role="tab" aria-controls="login" aria-selected="true">Login</button>
			</li>
			<li class="nav-item" role="presentation">
				<button class="nav-link" id="reg-tab" data-bs-toggle="tab" data-bs-target="#reg_form" type="button" role="tab" aria-controls="reg" aria-selected="false">Register</button>
			</li>
		
		</ul>
		
		<div class="card-body tab-content" id="myTabContent">

			<form id="login_form" class="tab-pane fade show active" role="tabpanel" aria-labelledby="home-tab"
				action="authenticate.php" method="POST">
				<input type="hidden" value="login" id="type" name="type" />
			
				<div class="mb-3">
					<input name="email" type="email" class="form-control" placeholder="Email Address" id="email">
				</div>
				<div class="mb-3">
					<input name="password" type="password" class="form-control" placeholder="Password" id="password">
				</div>
		
				<div class="d-grid gap-2 mb-3">
					<input type="submit" value="Login" class="btn btn-success" />
				</div>
			</form>

			<form id="reg_form" class="tab-pane fade" role="tabpanel" aria-labelledby="reg-tab" 
				action="authenticate.php" method="POST">
				<input type="hidden" value="register" id="type" name="type" />
				
				<div class="input-group mb-3">
					<input type="text" class="form-control me-2" placeholder="First Name"/>
					<input type="text" class="form-control" placeholder="Last Name"/>
				</div>
				<div class="mb-3">
					<input name="email" type="email" class="form-control" placeholder="Email Address" id="email">
				</div>
				<div class="mb-3">
					<input name="password" type="password" class="form-control" placeholder="Password" id="password">
				</div>
				<div class="mb-3">
					<input name="password2" type="password" class="form-control reg-field" placeholder="Confirm Password" id="password2">
				</div>
				<div class="d-grid gap-2 mb-3">
					<input type="submit" value="Register" class="btn btn-success" />
				</div>
			</form>
		</div>
	</div>

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>


</html>


