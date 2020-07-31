import React from 'react'

import {Buttons} from './Buttons'

export class Input extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = [{
      currentStudent: '',
      id: 'name'
    },
  ]
  }

  updateName = ({target}) => {
    this.setState(name => {
      return {currentStudent: name.currentStudent}
    })
  }

  render() {
    return (
    <div><label for="name"></label><input handleClick={this.updateName} id={name} placeholder="Student's Name"></div>
    )
  }
}
