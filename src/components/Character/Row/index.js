import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';

const CharacterRow = ({ history, name, url }) => {
  const [id, setId] = useState(null);


  useEffect(() => {
    const characterUrl = url.split('/');
    setId(characterUrl[characterUrl.length - 2]);
  }, []);

  return (
    <div className="character-row">
      <span onClick={() => history.push(`/character/${id}`)}>{name}</span>
    </div>
  );
};

export default withRouter(CharacterRow);
