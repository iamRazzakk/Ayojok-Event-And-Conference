import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-bootstrap";
// import { Toast } from "react-toastify/dist/components";


const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const [errormessage, setErrorMessage] = useState('')
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Login successful")

            })
            .catch(error => {
                console.log(error);
                setErrorMessage('invalid your email or password please try again')
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
                        {errormessage && (
                            <span className="text-red-500">{errormessage}</span>
                        )}
                        <p className="text-center"> New here please
                            <Link to='/register' className="ml-2 text-blue-600 text-base">Sing Up</Link>
                        </p>
                        <Toaster></Toaster>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;