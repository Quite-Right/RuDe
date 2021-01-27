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
        setUpload(file)
        setDrag(false)
    }

    function handleFile(event) {
        let file = event.target.files[0];
        setUpload(file)
    }

    function handleUpload(event) {
        console.log(upload)
    }
    return (
        <div className="input unselectable">
            <div className="input__content">
                {upload ?   <div className="loaded">
                                <Close onClick={() => setUpload(undefined)} className="loaded__cancel" />
                                <div className="loaded__name">
                                    {upload.name}
                                </div>
                            </div>
                        : drag
                        ? <div
                            onDragStart={e => dragStartHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragOver={e => dragStartHandler(e)}
                            onDrop={e => onDropHandler(e)}
                            className="waiting">
                            <Download className="waiting__icon" />
                            <label className="waiting__label">Drop file</label> 
                        </div>
                        : <div
                            onDragStart={e => dragStartHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragOver={e => dragStartHandler(e)}
                            className="waiting">
                            <Download className="waiting__icon" />
                            <label htmlFor="file" className="waiting__label">Choose a file</label>
                        </div>}
            </div>
            <div className="input__upload">
                <input type="file" id="file" name="file" className="display-none" onChange={(event) => { handleFile(event) }} />
                <div onClick={(event) => handleUpload(event)}>Upload</div>
            </div>
        </div>
    )
}

export default InputFileFunc