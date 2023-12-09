import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../../Firebase/Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";




const SingUp = () => {

    const { createUser, loginWithGoogle } = useContext(AuthContext)


    const handleSingUp = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, name);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Account created Successfully")
            })
            .catch(error => {
                console.log(error);
            })
    }
    // const handleSignInWithGoogle = () => {
    //     const googleProvider = new GoogleAuthProvider();
    //     signInWithPopup(auth, googleProvider)
    //         .then((result) => {
    //             console.log(result);
    //             toast.success("Signed in with Google successfully");
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };
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
                        <hr />
                        {/* <button onClick={handleSignInWithGoogle}>Google</button> */}
                        {/* <div className="flex justify-center items-center text-2xl"><FcGoogle onClick={handleSignInWithGoogle}></FcGoogle></div> */}
                        <Toaster></Toaster>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUp;