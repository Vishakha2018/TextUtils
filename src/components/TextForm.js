import React,{useState} from 'react';

export default function TextForm(props) {

    // to create state with initial value and update that value with function
    const [text,setText] = useState('');
    // we can access text and convert that text
    const handleUpperCase =()=>{
        setText(text.toUpperCase())
        props.alert("Converted to Uppercase","success")
    }
    const handleLowerCase =()=>{
        setText(text.toLowerCase())
        props.alert("Converted to Lowercase","success")

    }
    const handleClear =()=>{
        setText('')
        props.alert("Text Cleared","success")

    }
    const handleCopy =()=>{
        const newText = document.getElementById('textArea')
        newText.select();
        navigator.clipboard.writeText(newText.value)
        props.alert("Text copied you can ctrl+v for paste","success")

    }
    const handleRemoveExtraSpace =()=>{
        const newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.alert("Removes extra spaces","success")

    }

    // we get an event in onChange so we can trigger that accordingly so that we can change initial text
    // we have to listen onChange so that we can change the text value
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    return (
        <>
        <div className="container" style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* rows="3" is size of of textarea we can increase that */}
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} id="textArea" rows="8"></textarea>
            </div>
            {/* mx-2 is used to give space from x margin side-space */}
            <button className="btn btn-dark mx-2" onClick={handleUpperCase}>Convert Uppercase</button>
            <button className="btn btn-dark" onClick={handleLowerCase}>Convert Lowercase</button>
            <button className="btn btn-dark mx-2" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-dark " onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-dark mx-2" onClick={handleRemoveExtraSpace}>Remove Extra Space</button>

        </div>
        <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Text summary</h2>
            <p>
                {/* split is used to find for which we want to split here we add space so words will be count */}
                {text.trim().split(/\s+/).length} words and {text.length} characters
            </p>
            <p>{0.008 * text.split(' ').length}</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter something in above textArea to preview it here'}</p>
        </div>
        </>
    );
}
