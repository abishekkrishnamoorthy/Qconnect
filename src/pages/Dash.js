import React from 'react'
import Header from '../components/common/Header'
import Grouppanel from '../components/dash/Grouppanel'
import Groups from '../components/dash/Groups'
import Post from '../components/dash/Post'
import Postpage from '../components/dash/Postpage'
const Dash = () => {
  return (
    <div className='dash'>
      <Header/>
      <div className='dashcon'>
      <Grouppanel/>
      <Postpage/>
      </div>
    </div>
  )
}

export default Dash