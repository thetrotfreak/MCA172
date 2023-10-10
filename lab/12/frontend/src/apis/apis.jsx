import axios from "axios"

export const postFiles = async (files) => {
   await axios.post('http://localhost:8000/posts', files).then((res) => {
      console.log(res)
   })
}

export const updateFiles = async (title,content) => {
   await axios.put(`http://localhost:8000/posts/${title}`, {content}).then((res) => {
      console.log(res)
   })
}

export const deleteFiles = async (title) => {
   await axios.delete(`http://localhost:8000/posts/${title}`).then((res) => {
      console.log(res)
   })
}

export const getFiles = async (title, setData) => {
   await axios.get(`http://localhost:8000/posts/${title}`).then((res) => {
      setData({type:"GET_CONTENT", content:res.data.content })
   })
}