import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("")
    const [wordcount, setCount] = useState(0)

    const handleChange = (event) =>{
        setText(event.target.value)
    }

    const handleClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Changed to upper case!", "success")
    }

    const handleClick2 = () =>{
        setText(text.toLowerCase())
    }

    const handleClick3 = () =>{
        const mp = new Map();

        let arr = text.split(" ");
        for(let i=0;i<arr.length;i++)
        {
            mp.set(arr[i],1);
        }
        setCount(mp.size)
    }

    const handleClick4 = () =>{
        setText("");
        setCount(0);
    }

    const handleFileUpload = () =>{

        let input = document.getElementById("formFile")
        //let textArea = document.getElementById("myTextArea")

        let myfile = input.files[0]
        if (input.files.length === 0) return;
        
        let reader = new FileReader();

        reader.onload = (e) => {

            const file = e.target.result;
            const lines = file.split(/\r\n|\n/) //carriage returns and line breaks

            //textArea.value = lines.join('\n')
            setText(lines.join('\n')+"")
        }

        reader.readAsText(myfile);
    }

  return (
    <div>

        {/* Upload file */}
        <div className={`mb-3 my-3 text-${props.mode==='dark'?'white':'grey'}`}>
            <label htmlFor="formFile" className="form-label">Upload and Parse file</label>
            <input className="form-control" type="file" id="formFile" onChange={handleFileUpload}/>
        </div>

            {
                /* To let user upload multiple files
                    <div className="mb-3"> 
                        <label htmlFor="formFileMultiple" className="form-label">Multiple files input example</label>
                        <input className="form-control" type="file" id="formFileMultiple" multiple>
                    </div> 
                */
            }

        <div className="my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            
            <textarea className="form-control" id="myTextArea" rows="7" value={text} onChange={handleChange}
            style={{background: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}>

            </textarea>
        </div>

        <button className="btn btn-primary" onClick={handleClick}>
            Covert to UpperCase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClick2}>
            Convert to LowerCase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClick3}>
            Count Unique words
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClick4}>
            Clear
        </button>

        <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>Text Analysis:</h3>

            <p>
                Number of words: {text.split(" ").filter(Boolean).length}
            </p>
            
            <p>
                Characters count: {text.length}
            </p>

            <p>
                Unique words count: {wordcount}
            </p>
        </div>

    </div>
  )
}
