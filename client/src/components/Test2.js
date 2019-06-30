import React, { useState } from 'react'

const Resume = () => {
  const [hired, setHired] = useState(false)
  return (
    <>
      {!hired ? <button onClick={()=>setHired(true)}>Read Resume</button> : <p>Hired 😃</p>}
    </>
  )}

export default Resume
// hired &&
// || <p>Hired!</p>