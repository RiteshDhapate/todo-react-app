import React,{useContext,useState,useEffect} from 'react'
import "../styles/login.css"
import { UserContext,IsLogedinContext } from '../App'
import {NavLink,useNavigate} from "react-router-dom"
import Axios from "axios"
const Login = () => {
  const userdata=useContext(UserContext);
  const login=useContext(IsLogedinContext);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [user ,setUser]=useState([]);
  const [massage,setMassage]=useState('');
  const navigate = useNavigate();
 

function comareAndsetData(){


  ;(
    async()=>{
     try {
      setMassage("")
      login.setIsLogedIn(false);
      const res=await Axios.post("https://todo-node-server-ozyn0vd5m-riteshdhapates-projects.vercel.app/user",{email,password});
      const firstIndexData=await res.data[0]
      if(res.data.length ===0){

        setMassage("user is not found");
        return;
      }
      setUser(firstIndexData);
      userdata.setUser(firstIndexData);
      login.setIsLogedIn(true);
      setEmail("");
      setPassword("");
      navigate("/todo")
     } catch (error) {
      setMassage("something wrong..")
     }
    }
    )()
  
}
  return (
    <div className='login'>
      <section> 
        {/* <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>  */}

   <div className="signin"> 

    <div className="content"> 

     <h2>Sign In</h2> 

     <div className="form"> 

      <div className="inputBox"> 

       <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/> <i>Email</i> 

      </div> 

      <div className="inputBox"> 

       <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/> <i>Password</i> 

      </div> 
      

      <div className="links"> <a href="#" style={{color:"red"}}>{massage}</a> <NavLink to="/singup">Signup</NavLink> 

      </div> 

      <div className="inputBox" onClick={comareAndsetData}> 

       <input type="submit"   value="Login"/> 

      </div> 

     </div> 

    </div> 

   </div> 

  </section> 

    </div>
  )
}

export default Login