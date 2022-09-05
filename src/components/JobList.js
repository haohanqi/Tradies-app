import React from 'react'
import items from '../data'
import { Link } from 'react-router-dom'
import JobComponent from './JobComponent'

export default function JobList() {
  
  return (
   <ul>
     {items.map((item,index)=>{
       return (
          <Link to={`/job/${item.id}`} key={index}>
            <JobComponent {...item} />
          </Link>
       )
     })}
   </ul>
  )
}
