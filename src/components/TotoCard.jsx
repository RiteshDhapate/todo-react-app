import React from 'react'
import "../styles/todoCard.css"
import CompleteBtn from './CompleteBtn'
import UDbtn from './UDbtn'
import Axios from "axios"
import { useNavigate } from 'react-router-dom'
const TotoCard = (props) => {
  const navigate = useNavigate();
  const deleteTodo=()=>{
    ;(
      async()=>{
       try {
        const res=await Axios.delete("http://localhost:2000/deletetodo",{todoid:props.ele._id});
        props.setcount(props.count+1);
       } catch (error) {
        console.log("all todo error  :",error);
       }

      }
      )()
  }

const updateCompleted =()=>{
  ;(
    async()=>{
     try {
      const res=await Axios.put("http://localhost:2000/updatetodocompleted",{completed : !props.ele.completed,todoid:props.ele._id});
      props.setcount(props.count+2);
     } catch (error) {
      console.log("completion set error  :",error);
     }

    }
    )()
}

  return (
    <div className='todoCardContaner'>
        <div className="dataANDcomplete">
            <span>{props.ele.createdAt.split("T")[0]}</span>
            <span onClick={updateCompleted}><CompleteBtn com={props.ele.completed}/></span>
        </div>
        <div className="titleANDmassage">
            <h3>{props.ele.title}</h3>
            <p>{props.ele.massage}</p>
        </div>
        <div className="updateANDdeleteBTN">
            <span onClick={()=>navigate("/updatetodo",{state:props.ele})}><UDbtn title="Update" /></span>
            <span onClick={deleteTodo}><UDbtn title="Delete"/></span>
        </div>
    </div>
  )
}

export default TotoCard