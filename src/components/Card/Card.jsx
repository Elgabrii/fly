import React, { Component } from 'react';
import {
  Base,
} from './Card.style';
import { Flex } from '@rebass/grid';
class Card extends Component {
  constructor(props) {
    super(props)
  }
   handleClick = (id) => {
    this.props.selectHotel(id)
  }
  render() {
    const {
      id,
      name,
      photo,
      pricePerNight,
      totalReviews,
      totalScore,
      duration
    } = this.props
    return (
      <Base p={3} onClick={()=>this.handleClick(id)} flexDirection="column">
        {name}
        <Flex>
          <Flex width={1/2}>
            <img src={photo} />
          </Flex>
          <Flex pl={2} width={1/2} flexDirection="column">
            <p>$ {pricePerNight*duration} for {duration} nights</p>
            <p>{totalScore} Very good</p>
            <p>{totalReviews} reviews</p>
          </Flex>
        </Flex>
      </Base> 
    );
  }
}

export default Card;
