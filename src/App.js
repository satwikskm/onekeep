// import Home from './components/Home/Home';
import './App.css';
import {useState} from 'react'


function App() {
  const[title,setTitle]=useState()
  const[content,setContent]=useState()
  const[note,setNote]=useState([])
  const[obj,setObj]=useState({
    title:"",
    content:""
  })

  const submitHandler = (e) =>{
    e.preventDefault()
    
    setNote((note)=>{
      return [...note,{title,content}]
    })
    // setNote((note)=>{
    //   return [...note,obj]
    // })


    setTitle('')
    setContent('')
   
  }
  return (
    <div className="App">
      
        <form onSubmit={submitHandler}>
          <input 
          name='title'
          type="text" 
          placeholder='Enter the title'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          // onChange={(e)=>setObj(()=>  
          //   (
          //     [e.target.name]=e.target.value
          //   )
          // )}
          />
          <input 
          name='content'
          type="text" 
          placeholder='Enter the content'
          value={content}
          onChange={(e)=>setContent(e.target.value)}
          // onChange={(e)=>setObj(()=>  
          //   (
          //     [e.target.name]=e.target.value
          //   )
          // )}
          />
          <button type='submit'>Add</button>
        </form>
        <div className="display">
          {note.map((item)=>(
            <div>
              <h1>{item.title}</h1>
              <h2>{item.content}</h2>
            </div>
            
          ))}
          { console.log(note.map((x)=>x))}
        </div>
    </div>
  );
}

export default App;
