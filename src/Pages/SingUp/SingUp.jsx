import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Provider/AuthProvider";


const SingUp = () => {

    const { createUser } = useContext(AuthContext)
    // console.log(authInfo);


    const handleSingUp = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, name);
        createUser( email, password)
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
                    <form onSubmit={handleSingUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered bg-white" required />
                        </div>
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
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>

                        <p className="text-center"> Already have an account? please
                            <Link to='/login' className="ml-2 text-blue-600 text-base">Sing in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUp;