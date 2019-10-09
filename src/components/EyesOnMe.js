// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component {

  focusOn = () => console.log('Good!')
  focusOff = () => console.log('Hey! Eyes on me!')

  render() {
    return <button onFocus={this.focusOn} onBlur={this.focusOff}></button>
  }

}
