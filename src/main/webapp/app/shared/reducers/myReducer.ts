import { AppThunk } from 'app/config/store';
import axios from 'axios';

const initialState = {
  datos: 'los datos',
};

export default async function getAll(state = initialState) {
  const alicia = await axios.get('https://rickandmortyapi.com/api/character');
  console.log('alicia', alicia);
  return {
    ...state,
  };
}
7;
