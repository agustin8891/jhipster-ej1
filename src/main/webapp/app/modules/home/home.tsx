import './home.scss';

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const Home = () => {
  const datos = useAppSelector(state => state.myReducer.allCharacters);
  const account = useAppSelector(state => state.authentication.account);

  return <div>home</div>;
};

export default Home;
