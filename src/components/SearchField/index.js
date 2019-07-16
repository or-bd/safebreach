import React, { useState, useEffect } from 'react';
import useDebounce from './Debounce';
import './style.scss';

const SearchField = ({ callback }) => {
  const [value, setValue] = useState('');
  const searchTerm = useDebounce(value, 300);

  useEffect(() => {
    callback(value);
  }, [searchTerm]);

  return (
    <div id="search-box">
      <input type="text" placeholder="Search..." onChange={e => setValue(e.target.value)} />
    </div>
  );
};

export default SearchField;
