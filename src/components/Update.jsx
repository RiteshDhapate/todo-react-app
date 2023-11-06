import React,{useState,useContext} from 'react'
import "../styles/todo.css"
import Button from './Button'
import { useLocation,useNavigate } from 'react-router-dom'
import Axios from "axios"

const Update = () => {
    const location = useLocation();
    const navigate =useNavigate();
    console.log(location.state)
    const [title,setTitle]=useState(location.state.title)
    const [massage,setMassage]=useState(location.state.massage)
    const id =location.state._id;
    const handeleSubmit=(e)=>{
        e.preventDefault();

        
            ;(
              async()=>{
               try {
                const res=await Axios.put("http://localhost:2000/updatetodo",{title,massage,todoid:id});
                setTitle("");
                setMassage("");
                navigate("/todo")
               } catch (error) {
                console.log("add todo error 1 :",error);
               }
      
              }
              )()
    }
  return (
    <div className='todoContaner'>
      <div className="todoForm">
      <form onSubmit={(e)=>handeleSubmit(e)} >
      
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Enter TODO Title ....' />
        <textarea placeholder='Enter Massage...' value={massage} onChange={(e)=>setMassage(e.target.value)}></textarea>
        <button type='submit' > <Button isNavigate={false} title="Update todo"/></button>
      </form>
      </div>
      </div>
  )
}

export default Update