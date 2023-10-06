import { Link } from "react-router-dom";

const SingUp = () => {
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full shadow-2xl ">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-center"> Already have an account.
                                <Link to='/login' className="ml-2 text-blue-600 text-base">Sing In</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
};

export default SingUp;