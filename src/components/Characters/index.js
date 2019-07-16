import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import CharacterRow from '../Character/Row';
import './style.scss';
import Loader from '../Loader';

const Characters = ({ list, nextPageData, hasMore }) => (
  <div id="characters-container">
    <InfiniteScroll
      pageStart={0}
      loadMore={nextPageData}
      hasMore={!!hasMore}
      initialLoad={false}
      loader={<Loader key="loader" />}
    >
      {list.map(character => <CharacterRow key={character.name} {...character} />)}
    </InfiniteScroll>
  </div>
);
export default Characters;
