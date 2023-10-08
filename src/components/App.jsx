import React, { Component, Fragment } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
import { fetchImages } from '../services/api';

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
    isLoading: false,
    error: null,
  };

  hendleOnChange = event => {
    const searchQuery = event.target.value;
    this.setState({
      searchQuery,
    });
  };
  handleSearch = async event => {
    event.preventDefault();
    this.setState({
      isLoading: true,
    });
    fetchImages(this.state.searchQuery, this.state.per_page, this.state.page)
      .then(el => {
        console.log(el);
        this.setState({
          images: el.hits,
        });
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <div style={this.appStyles}>
        <Searchbar
          handleSearch={this.handleSearch}
          hendleOnChange={this.hendleOnChange}
        />
        {error != null && <p>{error}</p>}
        {isLoading ? (
          <Loader />
        ) : (
          <Fragment>
            <ImageGallery>
              {images.map(el => {
                return (
                  <ImageGalleryItem
                    key={el.id}
                    src={el.previewURL}
                    alt={el.tags}
                  />
                );
              })}
            </ImageGallery>
            {images.length > 0 && <Button />}
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;
