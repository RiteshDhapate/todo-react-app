import React, { useEffect, useContext, useState } from 'react'
import "../styles/todoContaner.css"
import TotoCard from './TotoCard'
import { UserContext, IsLogedinContext } from '../App.js';
import Axios from "axios"
const TodoContaner = (props) => {
  const userdata = useContext(UserContext);
  const [complete, setComplete] = useState(false);
  const login = useContext(IsLogedinContext);
  const [allTodo, setAllTodo] = useState([]);
  useEffect(() => {

    if (!login.isLogedin) {
      return;
    }
    ; (
      async () => {
        try {
          const res = await Axios.post("http://localhost:2000/alltodo", { userid: userdata.user._id });
          setAllTodo(res.data);
        } catch (error) {
          console.log("all todo error  :", error);
        }

      }
    )()
  }, [login.isLogedin, props.count])
  return (
    <div className='todoCardDataShowContaner'>
      {/* {
              allTodo.map((ele,index)=><TotoCard ele={ele} count={props.count} setcount={props.setcount}  key={index}/>)
            } */}
      <div className="incomplete">
        <div className="completeedHeading">
          <div className='select'>
            <select onChange={(e) => setComplete(!complete)}>
            <option value="false">Incomplete TODO</option>
            <option value="true">complete TODO</option>
          </select></div>
        </div>
        <div className="todoCards">
          {
            allTodo.filter((ele) => ele.completed == complete).map((ele, index) => <TotoCard ele={ele} count={props.count} setcount={props.setcount} key={index} />)
          }
        </div>
      </div>
    </div>
  )
}

export default TodoContaner