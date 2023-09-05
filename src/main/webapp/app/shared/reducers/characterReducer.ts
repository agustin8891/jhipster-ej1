import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  allCharacters: [],
  loading: false,
  error: null,
};

export type CharacterState = Readonly<typeof initialState>;

export const fetchCharacters = createAsyncThunk('character/fetchCharacters', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data.results;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.allCharacters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default characterSlice.reducer;
