import React, { useState, useEffect } from 'react';
import httpReq from '../../utils/http';
import SearchField from '../SearchField';
import Characters from '../Characters';
import CharacterNotFound from '../Character/NotFound';
import Loader from '../Loader';
import View from '../View';

const Main = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [nextPage, setNextPage] = useState('');
  const [characters, setCharacters] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const updateStateData = (data) => {
    if (data && data.count) {
      setNextPage(data.next);
      setCharacters(data.results);
    } else {
      setNextPage('');
      setCharacters([]);
    }
    setIsProcessing(false);
  };

  const getNextPageData = () => {
    httpReq({ url: nextPage }).then((data) => {
      if (data && data.count) {
        setNextPage(data.next);
        setCharacters([...characters, ...data.results]);
      }
    });
  };

  useEffect(() => {
    setIsProcessing(true);
    httpReq({ url: `https://swapi.co/api/people/?search=${searchInput}` }).then(updateStateData);
  }, [searchInput]);

  return (
    <View>
      <SearchField callback={setSearchInput} />
      {isProcessing ? <Loader /> : ''}
      {!isProcessing && !characters.length ? <CharacterNotFound /> : ''}
      {!isProcessing && characters.length
        ? <Characters list={characters} nextPageData={getNextPageData} hasMore={nextPage} /> : ''}
    </View>
  );
};

export default Main;
