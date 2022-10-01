import { Link } from "react-router-dom";
import Register from "./Register";

const Login = (props) => {
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
            <p>You don't have an account?  <Link to={"/register"}>Register Now</Link></p>
        </div>
    </div>
  );
};

export default Login;
