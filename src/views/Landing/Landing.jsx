import React, { Component } from 'react';
import Card from '../../components/Card';
import CardView  from'../../components/CardView';
import Gallery from '../../components/Gallery';
import Reviews from '../../components/Reviews';
import { Flex } from '@rebass/grid';
import {
  CardList,
  Base,
  SelectedCard,
  Sort
} from './Landing.style';

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardList: [],
      selectedHotel: '',
      duration: 1
    }
  }
  componentDidMount() {
    this.getHotels()
  }
  /*
  * This function is resposible for setting the price 
  * of all hotel nights when number of nights is selected
  * */
  setDurationAndPrice = (duration) => {
    this.setState(state => ({...state, duration}))
  }

  /*
  * This function is responsible for retreiving hotels.
  */
  async getHotels() {
    const response = await fetch('http://my-json-server.typicode.com/fly365com/code-challenge/hotels')
    const hotels = await response.json()
    this.setState({cardList: hotels})
  }
  /*
  * An API call to get a hotel by id
  * @param {String} id, id of the hotel
  * 
  */
   selectHotel = async (id) => {
    const response = await fetch(`http://my-json-server.typicode.com/fly365com/code-challenge/hotelDetails/${id}`)
    const selectedHotel = await response.json()
    this.setState({
      selectedHotel
    })
  }

  /*
  * This function is responsible for sorting the
  * reviews before they get passed down to the reviews
  * component
  */

  sortReviews = () => {
    let reviews = this.state.selectedHotel.reviews
    let sortedReviews = [...reviews]
    sortedReviews.sort((a, b) => (a.score > b.score)? -1: 1)
    this.setState(state => ({
      ...state,
      selectedHotel :{
        ...state.selectedHotel,
        reviews: sortedReviews
      }
    }))
    this.setState()
  }
  render() {
    const { cardList, selectedHotel, duration } = this.state
    return (
      <Base flexDirection="column">
        <CardList justifyContent="space-between">
          {
            cardList.map(cardData => <Card key={cardData.id} duration={duration} {...cardData} selectHotel={this.selectHotel} />)
          }
        </CardList>
        {
          selectedHotel && 
        <SelectedCard mt={3} flexDirection="column" p={3}>
          <CardView setDurationAndPrice={this.setDurationAndPrice}>
            {({nights, numberOfNights}) => (
              
              <>
                <h1>{selectedHotel.name}</h1>
                <Flex>
                  For 
                  <select onChange={(e) => numberOfNights(e)} name="cars">
                    {
                      nights.map((night, index) => <option key={index}>{night}</option>)
                    }
                  </select> 
                  nights
                </Flex>
                <Flex justifyContent="center">
                  <Gallery pictures={selectedHotel.pictures} />
                </Flex>
                <Flex flexDirection="column" mx={'20%'}>
                  <Flex alignItems="center;">
                    <h3>Reviews</h3> <Sort onClick={()=>this.sortReviews()}>sort</Sort>
                  </Flex>
                  
                  <Flex justifyContent="center">
                    <Reviews reviews={selectedHotel.reviews}/>
                  </Flex>
                </Flex>
              </>
              )}
          </CardView>
        </SelectedCard>
        }
      </Base>
    );
  }
}

export default Landing;
