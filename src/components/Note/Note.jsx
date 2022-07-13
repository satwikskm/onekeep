import React from 'react'

const Note = (props) => {
    // console.log(props)
    // console.log(props.note.title)
    // const {title,content}=props
    return(
        
    <div>
        <h1>note</h1>
        {/* <h1>{title}</h1>
        <p>{content}</p> */}
        <h1>{props.note.title}</h1>
        <h2>{props.note.content}</h2>
    </div>
)}

export default Note