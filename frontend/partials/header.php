
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
       
    <title>IT490 Project</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.3/axios.min.js" integrity="sha512-wS6VWtjvRcylhyoArkahZUkzZFeKB7ch/MHukprGSh1XIidNvHG1rxPhyFnL73M0FC1YXPIXLRDAoOyRJNni/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script>
        var session = null;
        function validate_session() {
            
            session = JSON.parse(sessionStorage.getItem("session"));
            if(!session){
                logout()
            } else {
                console.log("session", session)
                axios.post('/auth/authenticate.php', {"type": 'validateSession', "sessionID": session["sessionID"]})
                .then((res) => {
                    const {data} = res;
                    console.log("validate_session_res", res)
                    if(data.valid != 1) {
                        logout()
                    };
                })
            }
        }

        validate_session()

        function logout(){
            sessionStorage.clear();
            window.location.href = '/auth/'
        }
    </script>
    

</head>

<body>

<nav class="navbar navbar-expand-lg navbar-light bg-light mb-4" id="navbar">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">IT490</a>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <!-- LINKS !-->
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">My Fridge</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/grocery_list.php">Grocery List</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownRecipes" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Recipes
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownRecipes">
            <li><a class="dropdown-item" href="/pages/recipes_lookup.php">Lookup</a></li>
            <li><a class="dropdown-item" href="/pages/recipes_rating.php">Rating</a></li>
            <li><a class="dropdown-item" href="/pages/recipes_share.php">Share</a></li>
            <li><a class="dropdown-item" href="/pages/recipes_spotlight.php">Spotlight</a></li>
          </ul>
        </li>
    </ul>

     <!-- PROFILE !-->
    <ul class="navbar-nav me-5 mb-2 mb-lg-0">
    <li class="nav-item dropdown me-5">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownUser" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            
          </a>
          <ul class="dropdown-menu me-4" aria-labelledby="navbarDropdownUser">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li>
                <a class="dropdown-item" href="#" onclick="logout()">Logout</a>
            </li>
          </ul>
        </li>
    </div>

    </div>

  </div>
</nav>

