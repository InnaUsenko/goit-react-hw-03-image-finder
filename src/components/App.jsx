import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
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
    isLoadMore: false,
    isModalShow: false,
    pict: { url: null, alt: 'no image' },
    error: null,
  };

  handleSearch = searchQuery => {
    this.setState({
      images: [],
      searchQuery: searchQuery,
      per_page: 12,
      page: 1,
      isLoading: false,
      isLoadMore: false,
      isModalShow: false,
      pict: { url: null, alt: 'no image' },
      error: null,
    });
  };

  hendleLoadMore = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  showModal = id => {
    const images = this.state.images;
    let pict = { id: null, url: null, alt: 'no image' };
    for (const img of images) {
      if (img.id.toString() === id.toString()) {
        pict = img;
        break;
      }
    }
    this.setState({
      isModalShow: true,
      pict,
    });
  };

  closeModal = () => {
    this.setState({
      isModalShow: false,
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.state.searchQuery &&
      (prevState.searchQuery !== this.state.searchQuery ||
        prevState.page !== this.state.page)
    ) {
      this.setState({
        isLoading: true,
      });
      fetchImages(this.state.searchQuery, this.state.per_page, this.state.page)
        .then(el => {
          let isLoadMore = true;
          if (el.totalHits <= this.state.page * this.state.per_page) {
            isLoadMore = false;
            window.alert(
              "We're sorry, but you've reached the end of search results."
            );
          }
          this.setState({
            images: [...this.state.images, ...el.hits],
            isLoadMore,
          });
        })
        .catch(error => {
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    const { images, isLoading, isLoadMore, isModalShow, error } = this.state;

    return (
      <div style={this.appStyles}>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery>
          {images.map(el => {
            return (
              <ImageGalleryItem
                key={el.id}
                id={el.id}
                src={el.webformatURL}
                alt={el.tags}
                showModal={this.showModal}
              />
            );
          })}
        </ImageGallery>
        {isLoadMore && <Button hendleLoadMore={this.hendleLoadMore} />}
        {error != null && <p>{error}</p>}
        {isLoading && <Loader />}
        {isModalShow && (
          <Modal
            src={this.state.pict.largeImageURL}
            alt={this.state.pict.tags}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default App;
