import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider.jsx";

const Login = () => {

    const { signInUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                e.target.reset();
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <form  onSubmit={handleLogin} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                < legend className="fieldset-legend">Login if you have any account.</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>

                <p>New in our site?<Link to="/register"> <span>Register</span></Link></p>
            </form>
        </div>
    );
};

export default Login;