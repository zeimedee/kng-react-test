import React,{useState} from 'react'

function Radio() {
    const [color,setColor] = useState(true);
    const [state,setState] = useState(false);
    return (
        <div>
                <h1 id="text" style={{color: color ? 'red': 'green'}}>text</h1> 
                <input 
                    id="rad1"
                    name="b1"
                    type="radio"
                    onChange={()=>{
                        setColor(!color)
                        setState(false)
                    }}
                    checked={!state}
                    />
                    <input 
                    name="b2"
                    id="rad2"
                    type="radio"
                    onChange={()=>{
                        setColor(!color)
                        setState(true)
                    }}
                    checked={state}
                    />
        </div>
        
    )
}

export default Radio
