import React, { useState } from 'react';
import { AppBox } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
export const App = () => {
  const [cardName, setCardName] = useState('');

  const handleFormSubmit = searchQuery => {
    setCardName(searchQuery);
  };
  return (
    <AppBox>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery searchQuery={cardName} />
    </AppBox>
  );
};
