import { NavLink } from 'react-router-dom';
import Add from '../img/addAvatar.png';

const Register = () => {
    return(
        <div className="formContainer">
        <div className="Register">
            <h2 className="Header">
                Register CHAT-APP
            </h2>
            <form className="formRegister">
                <input className="nameRegister" type="text" placeholder="Full Name"  />
                <input className="emailRegister" type="email" placeholder="Email"  />
                <input className="passwordRegister" type="password" placeholder="Password"  />
                <label className="labelRegister">
                    <img src={Add} alt="avatar"></img>
                    <span>Add a avatar</span>
                </label>
                <button className="buttonRegister" type="submit">Login</button>
            </form>
            <p>You have an account? <NavLink to={"/login"}>Login Now</NavLink></p>
        </div>
        </div>
    );
};


export default Register;