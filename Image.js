import React, { useState, useRef } from 'react';
import './st.css'


const Image = () => {
    const [image, setImage] = useState();
    const inputRef = useRef();
    

    // const handleFile = file => {
    //     setImage(file);
    //     setPreviewUrl(URL.createObjectURL(file));
    // }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setImage(e.dataTransfer.files);
        console.log(e)
        console.log(e.dataTransfer.files)
    }

    const handleUpload = () => {

    };

    if (image) return (
        <div className="uploads">
            <ul>
                {Array.from(image).map((file, id) => <li key={id}>{file.name}</li>)}
                {/* { previewUrl && <div className="image">
       <img src={previewUrl} alt='image' /> 
       <span> {image.name} </span>
     </div> } */}
                {/* {image &&
                    image.map((file) => {
                        return (
                            <div>
                                <img src={file.preview} style={{ width: "600px", height: "400px", border: "3px solid #CCC" }} />
                            </div>
                        )
                    }
                    )
                } */}
            </ul>
            <div className="actions">
                <button onClick={() => setImage()}>Cancle</button>
                <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    )

    return (
        <>

            <div>
                {!image && (
                    <div className='dropArea'
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}>
                        <h1>Drag and Drop Files to upload</h1>
                        <h1>Or</h1>
                        <input
                            type="text"
                            multiple
                            onChange={(e) => setImage(e.target.files)}
                            hidden
                            ref={inputRef} />
                        <button onClick={() => inputRef.current.click()}>Select Files</button>
                    </div>
                )}
            </div>

            <div>
                {image &&
                    image.map((file) => {
                        return (
                            <div>
                                <img src={file.preview} style={{ width: "600px", height: "400px", border: "3px solid #CCC" }} />
                            </div>
                        )
                    }
                    )
                }
            </div>
        </>
    );
}

export default Image;
