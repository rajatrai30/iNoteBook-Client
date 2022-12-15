import React from 'react'

const About = (props) => {
  return (
    <div className='container my-4' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
      <h2>Application made by <a href='https://www.linkedin.com/in/rajat-rai-96298222b/' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} target="_blank" rel="noreferrer">Rajat Rai</a></h2>
    </div>
  )
}

export default About