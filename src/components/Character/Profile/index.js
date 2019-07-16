import React, { useState, useEffect } from 'react';
import httpReq from '../../../utils/http';
import View from '../../View';
import Loader from '../../Loader';
import CharacterNotFound from '../NotFound';
import './style.scss';

const CharacterData = (character) => {
  useEffect(() => {}, []);

  return (
    <div id="character-profile-data">
      {Object.keys(character).map((prop) => {
        if (typeof character[prop] === 'string') {
          return (
            <div className="row-data" key={prop}>
              <span>{`${prop}: `}</span>
              <span>{character[prop]}</span>
            </div>
          );
        } if (Array.isArray(character[prop])) {
          return (
            <div className="row-data" key={prop}>
              <h3>{`${prop}: `}</h3>
              <ul>
                {character[prop].map((el, i) => <li key={i}>{el}</li>)}
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
};

const CharacterProfile = ({ match }) => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    httpReq({ url: `https://swapi.co/api/people/${match.params.id}/` }).then((data) => {
      setCharacter(data);
      setIsProcessing(false);
    });
  }, []);

  return (
    <View>
      {isProcessing ? <Loader /> : ''}
      {!isProcessing && !character.name ? <CharacterNotFound /> : <CharacterData {...character} />}
    </View>
  );
};
export default CharacterProfile;
