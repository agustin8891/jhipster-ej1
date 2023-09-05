import './home.scss';

import React, { useEffect } from 'react';
/* import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap'; */
import { useAppDispatch, useAppSelector } from 'app/config/store';
import Character from '../character/Character';

export const Home = () => {
  const allCharacters = useAppSelector(state => state.characterReducer.allCharacters);
  const account = useAppSelector(state => state.authentication.account);
  console.log('allCharacters', allCharacters);
  return (
    <div className="container-fluid">
      <div className="row">
        {allCharacters.map(el => {
          return (
            <div className="d-flex px-5 col-12 col-md-6 col-lg-4 col-xl-3 justify-content-md-evenly justify-content-center my-4">
              <Character name={el.name} gender={el.gender} species={el.species} status={el.status} image={el.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
