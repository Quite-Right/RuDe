import { useState, useRef } from 'react';
import { useAlert } from "react-alert";
import { Download } from "@styled-icons/bootstrap";
import { Close } from "@styled-icons/ionicons-sharp";

function InputFile() {
  const [upload, setUpload] = useState<any | undefined>(undefined);
  const ref = useRef();
  const [drag, setDrag] = useState(false);
  //const [hasError, setHasError] = useState(false);
  const [errorName, setErrorName] = useState("");
  const alert = useAlert();

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setDrag(true)
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setDrag(false)
  }

  function onDropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    let file = e.dataTransfer.files[0]
    validateInput(file)
    setDrag(false)
    setUpload(file)
  }

  function handleUpload() {
    const hasError = validateInput(upload)
    if (!hasError) {
      console.log(upload)
    }
  }

  function validateInput(e: any) {
    let split = e.name.split(".");
    if (split[split.length - 1] !== "txt") {
      //setErrorName("Wrong file format");
      alert.error("Wrong file format")
      //setHasError(true);
      return true;
    } else if (e.size > 1024 * 1024 * 10) {
      //setErrorName("File size larger than 10Mb");
      alert.error("File size larger than 10Mb")
      //setHasError(true);
      return true;
    } else {
      // setHasError(false);
      // setErrorName("");
      return false;
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
              <label className="waiting__label-main">Drop to upload</label>
            </div>
            //oснoвнoй
            :
            <div
              onDragStart={e => dragStartHandler(e)}
              onDragLeave={e => dragLeaveHandler(e)}
              onDragOver={e => dragStartHandler(e)}
              className="waiting">
              <Download className="waiting__icon" />
              <label className="waiting__label-main">Drag file here</label>
              <div className="waiting__sub-text">
                <label className="waiting__label-sub">Or </label>
                <label htmlFor="file" className="waiting__label-link"> choose a file</label>
              </div>

            </div>}
      </div>
      {!upload ?
        <input type="file" id="file" name="file" className="display-none" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e && e.target && e.target.files && e.target.files[0]) {
            setUpload(e.target.files[0]);
          }
        }} />
        : ""}
      <button className="input__upload" onClick={(e) => handleUpload()} disabled={upload ? false : true}>Upload</button>
    </div>
  )
}

export default InputFile