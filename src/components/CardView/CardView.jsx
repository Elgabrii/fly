import React, { Component } from 'react';
import {
  loadArray
} from '../../utils';
export class CardView extends Component {

  numberOfNights = (e) => {
    const { setDurationAndPrice } = this.props
    setDurationAndPrice(e.target.value)
  }
  render() {
    const { children } = this.props
    return children({
      nights: loadArray(50),
      numberOfNights: this.numberOfNights
    })
  }
}

export default CardView;
