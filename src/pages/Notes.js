import React from 'react'
import JobNav from '../components/JobNav'
import {Card} from 'react-bootstrap'

const Notes = ({notes}) => {
  return (
    <>
    <JobNav/>
    <div>
        {notes.map(note =>{
            <Card>
                <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>{note.content}</Card.Text>
                </Card.Body>
            </Card>

        })}
    </div>

    </>
 
  )
}

export default Notes
