import React,{useState} from 'react'
import "../styles/CompleteBtn.css"

const CompleteBtn = (props) => {

    return (
        
            <div className="checkbox-wrapper-5">
                <div className="check">
                    {props.com ?  <input  checked type="checkbox" />  :<input type="checkbox" />}
                    {/* <input  checked={props.com} type="checkbox" /> */}
                    <label></label>
                </div>
            </div>

        
    )
}

export default CompleteBtn