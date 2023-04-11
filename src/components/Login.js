import React,{useState} from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

  const Login=(props)=>{

    const [email ,setEmail]=useState("");
    const [pass,setPass]=useState("");
    
    /*const handelsubmit=(e)=>{
    e.preventDefault();
        console.log(email);
    }
    onSubmit={handelsubmit}*/

    

    
    return(
        <div className="main">
        <div  className="auto-form-continer" >
            <h1>Login</h1>
        <form className="login-form" >
            
            <label htmlFor="email">Email</label>
            <input  value={email} type="email" required  placeholder=" your email@gmail.com" id ="email" name="email" 
            onChange={(e)=>{console.log(e.target.value)
            setEmail(e.target.value)}}/>
            
            <label htmlFor="password">Password</label>
            <input    value={pass}  type="password" required  placeholder=" password" id ="password" name="password" onChange={(e)=>setPass(e.target.value)
            }/>
            
            <button className="submit"  type="submit" onClick={()=>{console.log(email) }} > <Link to={"/"} >Login </Link>   </button>
           

            </form>
            
            
        
            
            </div>
            </div>
    )
}
export default Login;