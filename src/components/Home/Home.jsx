import React from 'react'
import {useState} from 'react'
import Note from '../Note/Note'
import Display from '../Display/Display'

const Home = () => {
  const [note,setNotes]=useState([])

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  return (
    <div>
         <Display onAdd={note}/>
        <Note note={note}/>
       
    </div>
  )
}

export default Home