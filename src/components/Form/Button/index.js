import React from 'react'
import PropTypes from "prop-types"

export const Button = (props) => {
  const handleClick = (event) => {
    props.buttonHandler(event)

  }

return <button onClick={handleClick}>{props.buttonTxt}</button>
}

Button.propTypes = {
  buttonHandler: PropTypes.func,
  buttonTxt: PropTypes.string,
}
