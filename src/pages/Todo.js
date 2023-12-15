import React, { useState, useContext } from 'react';
import "../styles/todo.css";
import Button from '../components/Button';
import TodoContaner from '../components/TodoContaner';
import { UserContext, IsLogedinContext } from '../App';
import Axios from "axios";

const Todo = () => {
  const userdata = useContext(UserContext);
  const login = useContext(IsLogedinContext);
  const [title, setTitle] = useState("");
  const [massage, setMassage] = useState("");
  const [count, setCount] = useState(0);
  const handeleSubmit = (e) => {
    e.preventDefault();
    if (!login.isLogedin) {
      alert("login to add todo");
      return;
    }
    try {
      ; (
        async () => {
          try {
            const res = await Axios.post("https://todo-node-server-ozyn0vd5m-riteshdhapates-projects.vercel.app/addtodo", { title, massage, completed: false, userid: userdata.user._id });            
            setTitle("");
            setMassage("");
            login.setIsLogedIn(true);
            setCount(count + 1);
          } catch (error) {
            console.log("add todo error 1 :", error);
          }

        }
      )()
    } catch (error) {
      console.log("add todo error 2 :", error);
    }
  }
  return (
    <div className='todoContaner'>
    
      <div className="todoForm">
        <form onSubmit={(e) => handeleSubmit(e)}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter TODO Title ....' />
          <textarea placeholder='Enter Massage...' value={massage} onChange={(e) => setMassage(e.target.value)}></textarea>
          <button type='submit'> <Button isNavigate={false} title="ADD TODO" /></button>
        </form>
      </div>
      <div className="todoList">
        
        {login.isLogedin && <TodoContaner setcount={setCount} count={count} />}

      </div>
    
    </div>
  )
}

export default Todo