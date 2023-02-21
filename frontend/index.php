<?php include 'partials/header.php'; ?>

<body>
    <div class="container">
    <h1>Logged in as: <span id="display_email">email<span></h1>
    <a href="auth/logout.php" class="btn btn-danger">Logout</a>
    </div>
    
    <script>
        console.log(user)
        dEmail = document.getElementById("display_email")
        dEmail.textContent = user['email']

    </script>
</body>


</html>