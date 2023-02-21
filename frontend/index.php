<?php include 'partials/header.php'; ?>

<body>
    <div class="container">
    <h1>Logged in as: <span id="display_email">email<span></h1>
    <a href="auth/logout.php" class="btn btn-danger">Logout</a>
    </div>
    
    <script>
        console.log(session)
        dEmail = document.getElementById("display_email")
        dEmail.textContent = session['email']

    </script>
</body>


</html>