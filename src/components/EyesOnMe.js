// Code EyesOnMe Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component {


focusFire = () => console.log('Good!');
blurFire = () => console.log('Hey! Eyes on me!');

  render(){
    return(
      <div>
        <button
            onFocus={this.focusFire}
            onBlur={this.blurFire}>
        </button>
      </div>
    )
  }
}
export default EyesOnMe;
