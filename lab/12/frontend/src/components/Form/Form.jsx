import React from 'react';
import "./Form.css"

const Form = ({data,setData}) => {
    return (
        <div className='form'>
            <input type='text' className='input-title' value={data.fileContent.title} onChange={(e) => {
                setData({type:"POST_FILE", title:e.target.value, content:data.fileContent.content})
            }} />
            <textarea name="textarea" id="textarea" value={data.fileContent.content} cols="30" rows="10" className='input-content'
            onChange={(e) => {
                setData({type:"POST_FILE", content:e.target.value, title:data.fileContent.title})
            }}
            >
            </textarea>
        </div>
    );
}

export default Form;
