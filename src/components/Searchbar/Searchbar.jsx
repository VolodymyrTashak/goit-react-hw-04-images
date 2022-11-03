import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

import {
  SearchbarBox,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNameChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      Notify.failure('Please write what to look for');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchbarBox>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <BsSearch size={25} />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={handleNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarBox>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
