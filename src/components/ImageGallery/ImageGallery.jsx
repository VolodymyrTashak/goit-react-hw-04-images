import React, { useState, useEffect } from 'react';
import { ImageGalleryBox } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { LoadMore } from '../Button/Button';
import { newsApiService } from 'API/AxiosCreate';
import PropTypes from 'prop-types';

export const ImageGallery = ({ searchQuery }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setPage(1);
    setData([]);
    newsApiService(searchQuery, 1, hideLoader, showLoader).then(res => {
      setData(res);
    });
  }, [searchQuery]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    newsApiService(searchQuery, page, hideLoader, showLoader).then(res => {
      setData(prevData => {
        return [...prevData, ...res];
      });
    });
  }, [page]);

  const hideLoader = () => {
    setIsLoader(false);
  };

  const showLoader = () => {
    setIsLoader(true);
  };

  const onClickLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {isLoader && <Loader />}
      <ImageGalleryBox>
        {data.map(img => {
          return <ImageGalleryItem data={img} key={img.id} />;
        })}
      </ImageGalleryBox>
      {data.length > 11 && <LoadMore onClickLoadMore={onClickLoadMore} />}
    </>
  );
};

LoadMore.propTypes = {
  ImageGallery: PropTypes.string,
};
