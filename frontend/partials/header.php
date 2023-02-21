
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
        var user;
        function validate_session() {
        
            let session = sessionStorage.getItem("session");
            if(!session){
                window.location.href = '/auth/';
            } else {
                axios.post('/auth/authenticate.php', {"type": 'validate_session', "sessionID": session["session_id"]})
                .then((res) => {
                    const {data} = res;
                    if(data.valid != 1) window.location.href = '/auth/';
                })
                user = JSON.parse(user_data);
            }
        }

        validate_session()
    </script>
    
</head>



