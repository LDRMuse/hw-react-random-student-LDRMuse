import React from 'react'

import {Buttons} from './Buttons'

export default class Input extends React.Component {
  state = {
    currentStudent: '',
  }

  buttons = [
    {
      buttonTxt: 'Enter Student'
    },
    {
      buttonTxt: 'Spin the Wheel'
    },
  ]

  renderButtons = () => {
    this.buttons.map((button, i) => {
      return (
        <Button
        buttonHandler={this.updateName}
        buttonTxt={button.buttonTxt}
        key={i}
        />
      )
    })
  }

  updateName = ({target}) => {
    this.setState(name => {
      return {currentStudent: name.currentStudent}
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.currentStudent}</p>
        {this.renderButtons()}
      </div>
    )
  }

}
