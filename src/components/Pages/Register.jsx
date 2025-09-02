import { useContext } from "react";
import { AuthContext } from "../AuthProvider.jsx";
import { Link } from "react-router-dom";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        createUser(email, password, name);

        //create user in firebase

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                e.target.reset();
            })
            .catch(error => {
                console.log(error);
            })  
    }

    return (
        <div>
            <form onSubmit={handleRegister} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Name</label>
                <input name="name" type="text" className="input" placeholder="Name" />

                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Register</button>

                <p>Already have an account? <Link to="/login"><span>Login</span></Link> </p>
            </form>
        </div>
    );
};

export default Register;