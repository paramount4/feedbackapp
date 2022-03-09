// rfce
import React from 'react'
// impt
import PropTypes from 'prop-types'

function Header({extext, bgColor, textColor}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{extext}</h2>
      </div>
    </header>
  )
}

// if there's no props then use this;
Header.defaultProps = {
  extext: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)', 
  textColor: '#ff6a95',
}

Header.propTypes = {
  text: PropTypes.string.isRequired, //if the props(extext) is not string, return error
  bgColor: PropTypes.string, 
  textColor: PropTypes.string,
}

export default Header