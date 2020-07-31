import React from 'react'
import {Button} from './Button'
import {Input} from './Input'

export class Form extends React.Component {
  state = {
    student: '',
  }

  buttons = [
    {
      buttonTxt: 'Enter Student',
      id: 'button1'

    },
    {
      buttonTxt: 'Spin the Wheel',
      id: 'button2'

    }
  ]

  renderButtons = () => {
    this.buttons.map((button, i) => {
      return (
        <Button
          buttonHandler={this.addName}
          buttonTxt={this.buttonTxt}
          id={this.id}
          key={i}
        />
      )
    })
  }

  addName = ({target}) => {
    this.setState(prevState => ({ student }) => {
      const existingStudent = student.find(function (stud) {
        return stud.name === newStudent.name
      })

      if (!existingStudent) {
        student.push(newStudent)
        console.log('added student', student)
      }
    })

    }
  }



  render() {
    return (
      <form>
      {addName()}
      <Input />
      </form>
    )
  }

  //So far I've added state to equal and empty student array?
  // there will be two buttons that do different things but for
  //now I have it set up for both to do one thing and that is to
  //add a student to the array, or if student exists, dont add that student.
  //my render function is not working so I need to figure that out.
  // from my understanding, I'm rendering a form and button is in there
  //but as a function.

