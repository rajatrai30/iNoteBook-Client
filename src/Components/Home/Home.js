import React from 'react';
import Notes from '../Notes/Notes';


const Home = (props) => {
  const {showAlert, mode} = props
  return (
    <div>
      <Notes showAlert={showAlert} mode={mode} />
    </div>
  )
}
export default Home;