import { NavLink } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  return (
    <div className="formContainer">
        <div className="Login">
            <h2 className="Header">
                Login CHAT-APP
            </h2>
            <form className="formLogin">
                <input className="emailLogin" type="email" placeholder="Email"  />
                <input className="passwordLogin" type="password" placeholder="Password"  />
                <button className="buttonLogin" type="submit">Login</button>
            </form>
            <p>You don't have an account?  <NavLink to={"/Register"}>Register Now</NavLink></p>
        </div>
    </div>
  );
};

export default Login;
