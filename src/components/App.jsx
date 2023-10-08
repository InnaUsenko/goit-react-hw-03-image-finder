import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
// import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';

class App extends Component {
  appStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '16px',
    paddingBottom: '24px',
  };

  state = {
    images: [],
    searchQuery: '',
    per_page: 12,
    page: 1,
  };

  downloadsPictures = event => {
    event.preventDefault();
    const img = {
      id: '',
      src: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
      alt: 'ololo',
    };
    const images = [];
    for (let i = 0; i < 12; i++) {
      img.id = i;
      images.push(img);
    }
    this.setState({
      images,
    });
  };
  render() {
    const { images } = this.state;

    return (
      <div style={this.appStyles}>
        <Searchbar handleSearch={this.downloadsPictures} />
        <ImageGallery>
          {images.map(el => {
            return <ImageGalleryItem key={el.id} src={el.src} alt={el.alt} />;
          })}
        </ImageGallery>

        {images.length > 0 ? <Button /> : <p>No images</p>}
      </div>
    );
  }
}

export default App;
