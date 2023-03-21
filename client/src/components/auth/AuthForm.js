import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/UserContext";


export default function AuthForm() {

    const [authtype, setAuthtype] = useState(1)
    const {login} = useAuth()
    const history = useNavigate()
    
    const handleSubmit = async (e) => {

        e.preventDefault();

        //Get form data and create onject from the
        const form_data = new FormData(e.target);
        const form_props = Object.fromEntries(form_data);

        try{ //Send authentication data to backend
            const res = await axios.post('/api/authenticate.php', form_props)
            console.log('authenticate', res)

            login(res.data); // use session data from backend response to login user
            history("/") // Go back to root
        } catch(err){
            const { data } = err.response
            console.log(data)
        }
       

    }


    return (
        <>
            <div id="alert_container">

            </div>

            <div class="card mx-auto p-3 mt-5 shadow-sm" style={{ 'width': "20rem" }}>

                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button onClick={() => setAuthtype(1)} class={`nav-link ${authtype === 1 ? "active" : ""}`} >Login</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button onClick={() => setAuthtype(0)} class={`nav-link ${authtype === 0 ? "active" : ""}`}>Register</button>
                    </li>

                </ul>

                <div class="card-body tab-content">
                    {
                        authtype === 1 ? (
                        <form class="tab-pane fade show active" onSubmit={handleSubmit} method="POST">
                            <input type="hidden" value="login" id="type" name="type" />
                            <div class="mb-3">
                                <input name="email" type="email" class="form-control" placeholder="Email Address" id="email" />
                            </div>
                            <div class="mb-3">
                                <input name="password" type="password" class="form-control" placeholder="Password" id="password" />
                            </div>

                            <div class="d-grid gap-2 mb-3">
                                <input type="submit" value="Login" class="btn btn-success" />
                            </div>
                        </form>
                        ) : (
                            <form class="tab-pane fade show active" role="tabpanel" onSubmit={handleSubmit} method="POST">
                                <input type="hidden" value="register" id="type" name="type" />

                                <div class="input-group mb-3">
                                    <input type="text" class="form-control me-2" name="fname" placeholder="First Name" />
                                    <input type="text" class="form-control" name="lname" placeholder="Last Name" />
                                </div>
                                <div class="mb-3">
                                    <input name="email" type="email" class="form-control" placeholder="Email Address" id="email" />
                                </div>
                                <div class="mb-3">
                                    <input name="password" type="password" class="form-control" placeholder="Password" id="password" />
                                </div>
                                <div class="mb-3">
                                    <input name="password2" type="password" class="form-control reg-field" placeholder="Confirm Password" id="password2" />
                                </div>
                                <div class="d-grid gap-2 mb-3">
                                    <input type="submit" value="Register" class="btn btn-success" />
                                </div>
                            </form>
                        )
                    }


                </div>
            </div>
        </>
    )
}
