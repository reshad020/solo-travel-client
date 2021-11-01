import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const {signInUsingGoogle} = useAuth();

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then((result) =>{
            history.push(location.state?.from || '/home')
        })
    }

    return (
        <div>
            <div>
                <h1 className="text-center font-bold text-2xl">Log in to your account </h1>

                <div >
                    <div className="text-center mt-8">
                        <label htmlFor='email' className="font-semibold">Email </label>
                        <input
                            type='email'
                            id='email'
                            placeholder='Your Email'
                            className="my-4 border-4"
                        />
                    </div>
                    <div className="text-center mt-2">
                        <label htmlFor='password' className="font-semibold">Password </label>
                        <input
                            type='password'
                            id='password'
                            placeholder='Your Password'
                            className="my-4 border-4"
                        />
                    </div>

                    <div className="text-center">
                       <button className=" font-bold bg-green-700 text-gray-200 px-4 py-1 rounded ">
                            Login
                       </button>
                       <p className="text-xl font-semibold my-4">Or</p>
                       <button className=" font-bold bg-purple-700 text-gray-200 px-4 py-1 rounded " onClick={handleGoogleLogin} >
                            Sign In with Google
                       </button>
                       <p className="text-xl font-semibold my-4 mb-20">Haven't registered yet? <button className="bg-gray-800 p-2 rounded text-gray-100">
                       <Link to="/register"> Go to registration </Link></button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;