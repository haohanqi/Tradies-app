import React from 'react'

export default function JobComponent(item) {
    const {title, status} = item
  return (
    <div>
        <span>{title}</span>
        <span>{status}</span>
    </div>
  )
}
