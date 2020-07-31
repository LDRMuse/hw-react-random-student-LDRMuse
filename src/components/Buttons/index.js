import React from 'react'

export default class Buttons extends React.Component {


  buttons = [
    {
      buttonTxt: 'Enter Student'
    },
    {
      buttonTxt: 'Spin the Wheel'
    },
  ]

  renderButtons = () => {
    this.buttons.map((button) => {
      return (
        <Button
        buttonTxt={button.buttonTxt}
        />
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderButtons()}
      </div>
    )
  }

}
