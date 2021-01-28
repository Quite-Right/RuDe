import { useState } from 'react';
import { Download } from "@styled-icons/bootstrap";
import { Close } from "@styled-icons/ionicons-sharp";

function InputFileFunc() {
    const [upload, setUpload] = useState(undefined);
    const [drag, setDrag] = useState(false);

    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e) {
        e.preventDefault()
        let file = e.dataTransfer.files[0]
        validateInput(file.name)
        setDrag(false)
        setUpload(file)
    }

    function handleUpload(e) {
        console.log(upload)
        /// PFUHEP[RF]
    }

    function validateInput (e){
        if (e.name.split(".")[e.name.split(".").length - 1] !== "txt") {
            throw Error("wrong file format");
          } else {
            console.log("Success")
          }
          if (e.size > 1024 * 1024 * 10) {
            throw Error("file size is bigger then 10Mb")
          }
    }
    
    return (
        <div className="input unselectable">
            <div className="input__content">
                {upload ?
                        //Файл заружен
                        <div className="loaded">
                            <Close onClick={() => setUpload(undefined)} className="loaded__cancel" />
                            <div className="loaded__name">
                                {upload.name}
                            </div>
                        </div>
                        : drag
                        //Дрoп файла
                        ? 
                        <div
                            onDragStart={e => dragStartHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragOver={e => dragStartHandler(e)}
                            onDrop={e => onDropHandler(e)}
                            className="waiting-drop">
                            <Download className="waiting__icon" />
                            <label className="waiting__label3">Drop to upload</label> 
                        </div>
                        //oснoвнoй
                        : 
                        <div
                            onDragStart={e => dragStartHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragOver={e => dragStartHandler(e)}
                            className="waiting">
                            <Download className="waiting__icon" />
                            <label className="waiting__label3">Drag file here</label>
                            <div className="testF"> 
                                <label className="waiting__label2">Or </label>
                                <label htmlFor="file" className="waiting__label1"> choose a file</label>
                            </div>
                            
                        </div>}
            </div>
            {!upload ? 
            <input type="file" id="file" name="file" className="display-none" onChange={(e) => { setUpload(e.target.files[0]); validateInput(e.target.files[0].name) }} />
            : ""}
            <button className="input__upload" onClick={(e) => handleUpload(e)} disabled={upload ? false : true} >Upload</button>
        </div>
    )
}

export default InputFileFunc