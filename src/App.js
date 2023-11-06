import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Home, About, Todo, Login, Register } from "./pages"
import Update from './components/Update';
export const UserContext = createContext();
export const IsLogedinContext = createContext();
function App() {
  const [user, setUser] = useState({});
  const [isLogedin, setIsLogedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <UserContext.Provider value={{ user, setUser }}>
          <IsLogedinContext.Provider value={{ isLogedin, setIsLogedIn }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/todo' element={<Todo />} />
              <Route path='/updatetodo' element={<Update />} />
              <Route path='/login' element={<Login />} />
              <Route path='/singup' element={<Register />} />
            </Routes>
          </IsLogedinContext.Provider>
        </UserContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

