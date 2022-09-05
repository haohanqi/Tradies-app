import React from 'react'
import { Link } from 'react-router-dom'
import JobNav from './JobNav'
import Notes from '../pages/Notes'
import Create from '../pages/Create'
import Home from '../pages/Home'
import {Routes, Route} from 'react-router-dom'

export default function JobDetail({job}) {

const {title, date, status, name, contact, notes} = job
  return (
    <>
    <JobNav/>
    <article>
        <div>{title}</div>
        <div>{date}</div>
        <div>{status}</div>
        <div>{name}</div>
        <div>{contact}</div>
        <ul>{notes.map((item,index) =>{
          return(
            <li key={index}>
              {item.content}
            </li>
          )
        })}</ul> 
    </article>

  </>
  )
}
