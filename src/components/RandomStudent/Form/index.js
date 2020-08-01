import PropTypes from 'prop-types'
import React from 'react'

export const Form = () => {

  const handleSubmit = (event) => {
    event.preventDefault()

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>Add Student</button>
    </form>
  )
}

Form.defaultProps = {
  value: '',
}

Form.propTypes = {
  formHandler: PropTypes.func,
  value: PropTypes.string,
}
