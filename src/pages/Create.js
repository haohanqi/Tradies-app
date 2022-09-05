import React from 'react'
import { useState } from 'react'
import JobNav from '../components/JobNav'
import {Form} from 'react-bootstrap' 

const Create = ({setNotes}) => {
    const {form,setForm} = useState({title:"",content:""})

    function handleChange(event){
        const {value,name} = event.target
        setForm({...form, [name]: value })

    }

    function addNote(){
        setNotes(note => [...note,form])
        setForm({title: '', text:''})
    }

   return (
     <>
    <JobNav/>
    
    <div>
    <Form> 
      <Form.Group className="mb-3" style={{width: "50%"}}>
        <Form.Label>Note Title</Form.Label>
        <Form.Control onChange={handleChange} value={form.title} name="title" type="text" placeholder="Enter title" />

        <Form.Label>Text</Form.Label>
        <Form.Control onChange={handleChange} value={form.content} name="content" type="text" placeholder="Enter text" />
      </Form.Group>

      <button onClick={addNote}>Add Note</button>
    </Form>
    </div>
   </>
  )
}

export default Create
