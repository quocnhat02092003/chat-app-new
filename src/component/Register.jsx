import { NavLink } from 'react-router-dom';
import React from 'react';
import Add from '../img/addAvatar.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage,db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [err, setErr] = React.useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const storageRef = ref(storage, displayName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            (error) => {
                setErr(true);
            }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
                })
            await setDoc(doc(db, "users", res.user.uid), {
                uid:res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
                })
            await setDoc(doc(db, "usersChat", res.user.uid), {
            })
            navigate("/");
        })
    });
        }
    catch(err){
        setErr(true)
    }
}


    return(
        <div className="formContainer">
        <div className="Register">
            <h2 className="Header">
                Register CHAT-APP
            </h2>
            <form className="formRegister" onSubmit={handleSubmit}>
                <input className="nameRegister" type="text" placeholder="FullName"  />
                <input className="emailRegister" type="email" placeholder="Email"  />
                <input className="passwordRegister" type="password" placeholder="Password"  />
                <input style={{display:"none"}}  type="file" id='file' />
                <label className="labelRegister" htmlFor="file">
                    <img src={Add} alt="avatar"></img>
                    <span>Add a avatar</span>
                </label>
                <button className="buttonRegister" type="submit">Login</button>
                {err && <p style={{color:"red"}}>Email or password is incorrect</p>}
            </form>
            <p>You have an account? <NavLink to={"/login"}>Login Now</NavLink></p>
        </div>
        </div>
    )

}

export default Register;