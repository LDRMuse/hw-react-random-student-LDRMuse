
import React from "react"
import {Form} from './Form'

import { getRandomIntInclusive } from "lib"

export class RandomStudent extends React.Component {

  state = {
    selectedStudents: '',
    studentList: []
  }

  handleClick = () => {
    this.setState({ selectedStudents: this.state.studentList[getRandomIntInclusive(0, this.state.studentList.length - 1)]})
  }

  handleForm = ({target}) => {
    this.setState(prevState => {
      return ({
        studentList: prevState.studentList.concat(target.elements[0].value)
      })
    })
  }
render() {
  return <main>
    <Form formHandler={this.handleForm} />
    <button onClick={this.handleClick}>Spin the Wheel</button>
    <p>{this.state.selectedStudents}</p>
  </main>
}

}
