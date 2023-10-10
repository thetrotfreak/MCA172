import React from 'react';
import Form from './Form/Form';
import { useData } from '../contexts/DataContext';
import { deleteFiles, getFiles, postFiles, updateFiles } from '../apis/apis';

const Main = () => {
    const {data, setData} = useData()
    const file = data.fileContent
    return (
        <>
        <h3>File opertions</h3>
        <div className='container'>
            <Form data={data} setData={setData}/>
        </div>
        <div className='btns'>
            <button onClick={() => {postFiles(file)
            setData({type:"POST_FILE", content:" ", title:" "})
            console.log(data.fileContent)
            }}>Post File</button>
            <button onClick={() => {updateFiles(data.fileContent.title, data.fileContent.content)
            console.log(file.content)
             setData({type:"POST_FILE", content:" ", title:" "})
            }}>Update file</button>
            <button onClick={() => {
                deleteFiles(data.fileContent.title)
            }}>Delete Files</button>
            <button onClick={() => {
                getFiles(data.fileContent.title, setData)
                setData({type:"POST_FILE", content:data.content, title:data.fileContent.title})
            }}>Get Files</button>
            <button onClick={() => setData({type:"POST_FILE", content:" ", title:" "})}>clear inputs</button>
            </div>
        </>
    );
}

export default Main;
