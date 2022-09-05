import React from 'react'
import JobDetail from '../components/JobDetail'
import { useParams } from 'react-router-dom'
import data from '../data';

export default function Job(item) {
item = useParams();
console.log(item)
  return (
    <>
      <JobDetail job ={data[item.id]}/>
    </>
  )
}
