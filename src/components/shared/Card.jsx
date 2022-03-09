import React from 'react'
import PropTypes from 'prop-types'

function Card({children, reverse }) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div> // conditional class. if reverse is true, apply the style of reverse
  )
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card