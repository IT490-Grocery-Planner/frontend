<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<title>Authentication</title>
</head>

<body>
<div id="alert_container">
	
</div>

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

			<form id="login_form" class="tab-pane fade show active" role="tabpanel" aria-labelledby="home-tab" method="POST">
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

			<form id="reg_form" class="tab-pane fade" role="tabpanel" aria-labelledby="reg-tab" method="POST">
				<input type="hidden" value="register" id="type" name="type" />
				
				<div class="input-group mb-3">
					<input type="text" class="form-control me-2" name="fname" placeholder="First Name"/>
					<input type="text" class="form-control" name="lname" placeholder="Last Name"/>
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

	<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.3/axios.min.js" integrity="sha512-wS6VWtjvRcylhyoArkahZUkzZFeKB7ch/MHukprGSh1XIidNvHG1rxPhyFnL73M0FC1YXPIXLRDAoOyRJNni/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

	<script>
		function handleSubmit(e){
		
			e.preventDefault();
			const form_data = new FormData(e.target);
			const form_props = Object.fromEntries(form_data);

			axios.post('authenticate.php', form_props)
			.then((res) => {
				const {data} = res
				//store response data in session Storages
				console.log('authenticate', res)
				sessionStorage.setItem("session", JSON.stringify(data));
				//TODO: change to pageURL function
				window.location.href = '../index.php';

			}).catch(err => {
				const {data} = err.response
				console.log(err)
				document.getElementById("alert_container").innerHTML = `<div class="alert alert-danger" role="alert">
					${data.message}
				</div>`
			})
		}

		const login_form = document.getElementById("login_form");
		const reg_form = document.getElementById("reg_form");

		login_form.addEventListener("submit", handleSubmit);
		reg_form.addEventListener("submit", handleSubmit);
	</script>
</body>



</html>


