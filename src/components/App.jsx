import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

class App extends Component {
  appStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '16px',
    paddingBottom: '24px',
  };
  render() {
    return (
      <div style={this.appStyles}>
        <Searchbar />
        <ImageGallery>
          <ImageGalleryItem
            src={
              'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
            }
            alt={'kiri'}
          />
          <ImageGalleryItem
            src={
              'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
            }
            alt={'kiri'}
          />
          <ImageGalleryItem
            src={
              'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
            }
            alt={'kiri'}
          />
          <ImageGalleryItem
            src={
              'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
            }
            alt={'kiri'}
          />
          <ImageGalleryItem
            src={
              'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
            }
            alt={'kiri'}
          />
          <ImageGalleryItem
            src={
              'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
            }
            alt={'kiri'}
          />
          <ImageGalleryItem
            src={
              'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
            }
            alt={'kiri'}
          />
          <ImageGalleryItem
            src={
              'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
            }
            alt={'kiri'}
          />
        </ImageGallery>
      </div>
    );
  }
}

export default App;
