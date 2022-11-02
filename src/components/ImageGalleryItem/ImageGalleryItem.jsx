import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryItemBox,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <ImageGalleryItemBox>
      <ImageGalleryItemImage
        onClick={toggleModal}
        src={data.webformatURL}
        alt={data.tags}
      />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={data.largeImageURL} alt={data.tags} />
        </Modal>
      )}
    </ImageGalleryItemBox>
  );
};

ImageGalleryItem.propTypes = {
  data: PropTypes.object,
};
