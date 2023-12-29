import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

export const first = createSlice({
  name: 'first',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setName } = first.actions;
export default first.reducer;
