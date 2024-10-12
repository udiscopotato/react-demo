import React , {useState} from 'react'

export default function Form(input) {
    const[text, setText] = useState("")
    const[numword, setNumword] =  useState(0)
    const textUpper = () =>{
        setText(text.toUpperCase())
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
        let numWords = 0;

        for (var i = 0; i < text.length; i++) {
            var currentCharacter = text[i];
      
            if (currentCharacter === " ") {
                numWords += 1;
            }
        }
        numWords += 1;
        setNumword(numWords)
    }

    const clearText = ()=>{
        setText("")
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const copy = () =>{
        var writes = document.getElementById('myBox');
        writes.select();
        writes.setSelectionRange(0,9999);
        navigator.clipboard.writeText(writes.value);
        // input.alert("Text Copied to ClipBoard","success");
    }
    return (
        <>
        <div className='container my-5' /*style={{color: input.mode === "light"?"black":"white"}}*/>
            <div className="mb-3">
                <h1>{input.heading}</h1>
                <textarea className={`form-control bg-${input.mode === 'light'?'white':'dark'} text-${input.mode === 'light'?'dark':'light'}`} id='myBox' value={text} onChange={handleOnChange} rows="5"></textarea>
            </div>
            <button  className="btn btn-primary mx-1" onClick={textUpper}>Connvert to UPPERCASE</button>
            <button  className="btn btn-primary mx-1" onClick={clearText}>Clear Texts</button>
            <button className='btn btn-primary mx-1' onClick={speak}>Speak</button>
            <button className='btn btn-primary mx-1' onClick={copy}>Copy Text</button>
        </div>
        <div className='container my-5' >
            <h2>Your Text Summery</h2>
            <p>Total {numword} Words and {text.length} characters.</p>
            <p>Total {numword * 0.008} Minute Read</p>
            <h3>Preview</h3>
            <p style={{color: input.mode === "light"?"black":"white"}}>{text}</p>
        </div>
        </>
    )
}
