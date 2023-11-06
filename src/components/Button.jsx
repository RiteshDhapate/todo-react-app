import React from 'react'
import "../styles/button.css"
import {useNavigate} from "react-router-dom"
const Button = (props) => {
    const navigate = useNavigate();
  return (
    <button className="button-13" role="button" onClick={()=>props.isNavigate==true ? navigate("/todo"):""}>
                    <span className="text">{props.title}</span>
                    <span className="button-13-background"></span>
                    <span className="button-13-border"></span>

                    {/* <!-- mask-border fallback --> */}
                    <svg style={{ position: "absolute" }} width="0" height="0">
                        <filter id="remove-black-button-13" colorInterpolationFilters="sRGB">
                            <feColorMatrix type="matrix" values="1 0 0 0 0
                                                                 0 1 0 0 0
                                                                 0 0 1 0 0
                                                               -1 -1 -1 0 1" 
                result="black-pixels"></feColorMatrix>
                            <feComposite in="SourceGraphic" in2="black-pixels" operator="out"></feComposite>
                        </filter>
                    </svg>
                </button>
  )
}

export default Button