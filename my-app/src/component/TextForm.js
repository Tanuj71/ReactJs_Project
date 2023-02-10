
import React, { useState } from "react"


export default function TextForm(props) {
    const handleupperCase=()=>{
let newText =text.toUpperCase();

setText(newText)
    }
    const handlesmallerCase=()=>{
let smallText=text.toLowerCase();
setText(smallText)
    }
    const handleclearCase=()=>{
        let smallText="";
        setText(smallText)
            }
    
    const handleonchange=(event)=>{
setText(event.target.value)
    }
    const [text, setText] = useState(" ");
    return (
    <div>    
        <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleonchange} id="Mybox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleupperCase}>Convert TO Uppercase</button>

<button className='btn btn-primary mx-2' onClick={handlesmallerCase}>Convert TO Smallcase</button>

<button className='btn btn-primary mx-2' onClick={handleclearCase}>Clear Text</button>

 <h1>Your Text Summary</h1>
 <p>{text.split(" ").length}words and {text.length} character
 </p>
    </div>

    
    
  )
}
