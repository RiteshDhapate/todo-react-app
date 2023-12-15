import React,{useState} from 'react'
import {NavLink,useNavigate} from "react-router-dom"
import Axios from "axios"
const Register = () => {
  const navigate=useNavigate();
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [massage,setMassage]=useState("");

  function comareAndsetData(){
   
  
    ;(
      async()=>{
       try {
        setMassage("")
        // login.setIsLogedIn(false);
        const res=await Axios.post("https://todo-node-server-r3eeuwmo1-riteshdhapates-projects.vercel.app/adduser",{username,email,password});
        const firstIndexData=await res.data[0]
        console.log(res.data);
        if(res.data.length ===0){
  
          setMassage("user not register");
          return;
        }
       
        setEmail("");
        setPassword("");
        setUsername("");
        navigate("/login")
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

            <h2>Sign Up</h2>

            <div className="form">
              <div className="inputBox">

                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required /> <i>User Name</i>

              </div>

              <div className="inputBox">

                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> <i>Email</i>

              </div>

              <div className="inputBox">

                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /> <i>Password</i>

              </div>


              <div className="links"> <a href="#" style={{ color: "red" }}>{massage}</a> <NavLink to="/login">Login</NavLink>

              </div>

              <div className="inputBox" onClick={comareAndsetData}>

                <input type="submit" value="Login" />

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Register
