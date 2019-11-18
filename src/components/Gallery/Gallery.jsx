import React, { Component } from 'react';
import {
  Base,
  Photo,
  Thumbnails
} from './Gallery.style';
class Gallery extends Component {
  constructor(props){
    super(props)
    this.state = {
      photoIndex: 0
    }
  }
  setPhoto = (photoIndex) => {
    this.setState({photoIndex})
  }
  render() {
    const { pictures } = this.props 
    const { photoIndex } = this.state
    return (
      <Base flexDirection="column">
        <Photo>
          <img src={pictures? pictures[photoIndex].photo:""} alt=""/>
        </Photo>
        <Thumbnails>
          {pictures? pictures.map((picture, index) => <img key={picture.thumbnail} onClick={()=> this.setPhoto(index)} src={picture.thumbnail} alt="" />) : ""}
        </Thumbnails>
      </Base>
    );
  }
}

export default Gallery;
