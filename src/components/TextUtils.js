import React,{useState} from 'react'


export default function TextUtils(props) {

    const [text, setText] = useState("");


    const handleUpCase=() =>{
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to upper case","success")
    }
    
    const handleLoCase=() =>{
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to lower case","success")
    }
    

    const handleChange=(event) =>{
        
        setText(event.target.value);
    }
     
    const handleClearCase = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared Text","success")
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);    
        props.showAlert("Copy to clipboard","success")
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra space","success")

    }

    
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1> 
        <div className="mb-3">
            <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
            color: props.mode==='dark'?'white':'#042743' }} ></textarea>
        </div>
        
        <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleUpCase} > Upper </button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleLoCase} > Lower </button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleClearCase} > Clear </button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleCopy} > Copy </button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleExtraSpace} > remove space </button>

    </div>
    
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters </p>
        <p>{ 0.08 *text.split(" ").length }  Minutes read</p>
        <h2>Preview</h2>
        <p> {text.length>0?text:'enter text in textbox above to preview '}</p>
    </div>

    </>
  );
}
