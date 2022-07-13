import React from 'react'
import {useState} from 'react'
const Display = (props) => {
  const[note,setNote]=useState({
    title:"",
    content:""

  })
  const onChangehandle = (e) =>{
    e.preventDefault()
    const[name,value]=e.target
    console.log(e.target.name)
    setNote((prevnote)=>{
     return{
       ...prevnote,
       [name]:value
     }
    })



  }

  const onsubmitHandle=(e)=>{
    e.preventDefault()
    props.addNote(note)
    setNote({
      title:"",
     content:""
    })
  }

  return (
    <div>
        <form onSubmit={onsubmitHandle}>
        <input 
        type="text"
        placeholder='Note Title'
        name="title"
        value={note.title}
        onChange={onChangehandle}
         />
         <input 
        type="text"
        name="content"
        placeholder='Note Title'
        value={note.content}
        onChange={onChangehandle}
         />
         <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Display