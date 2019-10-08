// Code Keypad Component Here
import React, {Component} from 'react';

export default class Keypad extends Component {

handleInput = () => console.log('Entering password...')

  reder() {
    <input type="password" onkeyUp={this.handleInput}/>
  }
}
