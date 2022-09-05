import React from 'react'
import HomeNav from '../components/HomeNav'
import JobList from '../components/JobList'
import "bootswatch/dist/pulse/bootstrap.min.css"

export default function Home() {
  return (
    <>
     <HomeNav />
     <JobList />
    </>
  )
}
