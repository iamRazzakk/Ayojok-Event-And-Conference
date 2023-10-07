import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Provider/AuthProvider";


const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full shadow-2xl ">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Log in</button>
                        </div>
                        <p className="text-center"> Or Sing Up Using
                            <Link to='/register' className="ml-2 text-blue-600 text-base">Sing Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;