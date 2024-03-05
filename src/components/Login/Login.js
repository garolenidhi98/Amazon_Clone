import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from 'react-router-dom';
import logo from '../../media/amazon-logo-black.png';
import { auth } from '../../vendors/firebase';

function Login() {
    const history = useHistory();  //it allows to change url and redirect
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                //it succesfully created a new user with email and password
                history.push("/")
            })
            .catch(error => alert(error.message)) 
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it succesfully created a new user with email and password
                if (auth) {
                    history.push("/")
                }
            })
            .catch(error => alert(error.message))
    }

        return (
            <div className='login'>
                <Link to="/">
                    <img src={logo} alt="" className="login__logo" />
                </Link>
                            
                    <div className="login__container">
                        <h1>Sign-in</h1>

                        <form>
                            <h5>E-mail</h5>
                            <input
                                type="text"
                                placeholder='abc123@gmail.com'
                                value={email}
                                onChange={e =>setEmail(e.target.value)}
                            />
                             
                            <h5>Password</h5>
                            <input
                                type="password"
                                placeholder='12345678'
                                value={password}
                                onChange={e =>setPassword(e.target.value)}
                            />
                            <button
                                onClick={signIn}
                                type="submit"
                                className='login__signInButton'>
                                Sign In
                            </button>
                        </form>
                        <p> By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please
                            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                        </p>

                        <button
                            onClick={register}
                            className='login__registerButton'>
                            Create a New Account
                        </button>
                </div>
            </div>
        )
    }

export default Login;
