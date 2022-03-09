import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='/about'> {/*for internal linke, Link is better than <a> as it doesn't refresh the page}*/}
        {/* <a href='/about'/> should not do this. this will refresh the page not loading from the client-side.  */}
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink