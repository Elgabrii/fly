import React, { Component } from 'react';
import {Flex} from '@rebass/grid';
import { loadArray } from '../../utils';
import {
  Base,
  Circle,
  Review,
  Page,
  Arrow
} from './Reviews.style';
export class Reviews extends Component {
  constructor(props) {
    super(props)
    this.state={
      currentReviewsPage: 1,
      reviewsPerPage: [],
      pages:1,
    }
  }
  componentDidMount() {
    this.paginate(1, 3, this.props.reviews) 
  }
  componentDidUpdate(prevProps) {
    const newProps = this.props
    if(prevProps.reviews !== newProps.reviews) {
      this.setState((state) => ({...state, currentReviewsPage: 1}))
      this.paginate(1,3,newProps.reviews)
    }
  }
    
  nextPage = () => {
    const { currentReviewsPage } = this.state
    this.paginate(currentReviewsPage+1, 3, this.props.reviews)
    this.setState(state=> ({...state, currentReviewsPage: currentReviewsPage + 1 }))
  }
  previousPage = () => {
    const { currentReviewsPage } = this.state 
    this.paginate(currentReviewsPage -1 , 3 , this.props.reviews)
    this.setState(state => ({...state, currentReviewsPage: currentReviewsPage -1 }))
  }
  getPage = (page) => {
    const { currentReviewsPage } = this.state
    this.paginate(page, 3, this.props.reviews)
  }

  paginate = (pageNumber=1, offset=1, reviews) => {
    if (reviews){
      let myReviews = [...this.props.reviews]
      let pages = reviews? Math.ceil(reviews.length/offset) : 1
      let reviewsPerPage = myReviews.splice(pageNumber*offset-offset, offset)
      this.setState((state)=>({
        ...state,
        reviewsPerPage,
        pages
      }))
    }
    return
  }
  render() {
    const { reviewsPerPage, currentReviewsPage, pages } = this.state
    return (
      <Base py={4} alignItems="flex-start" flexDirection="column">
         {reviewsPerPage &&
           reviewsPerPage.map((review, index) => (
            <Flex key={index}>
              <Flex alignItems="center" width={1/10} m={3}>
                <Circle>{review.score}</Circle>
              </Flex>
              <Review alignItems="center">{review.review}</Review>
            </Flex>
          ))
        }

        <Flex width={1} mt={3} justifyContent="center" alignItems = "center">
        {
          (currentReviewsPage>1)
          &&
          <Arrow onClick={this.previousPage}>
            &lsaquo;
          </Arrow>
        }
        {
         (currentReviewsPage<pages)
         &&
         <Arrow onClick={this.nextPage}>
            &rsaquo;	
          </Arrow>
        }
        </Flex>
      </Base>
    );
  }
}

export default Reviews;
