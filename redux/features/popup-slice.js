import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popups: {},
  shadow: false,
};

export const popup = createSlice({
  name: 'classes',
  initialState,
  reducers: {
    closeAll(state) {
      for (const key in state.popups) {
        state.popups[key] = false;
        state.shadow = false;
      }
    },
    togglePopup(state, action) {
      if (!state.popups[action.payload]) {
        state.popups[action.payload] = true;
        state.shadow = true;
      } else {
        state.popups[action.payload] = !state.popups[action.payload];
        state.shadow = !state.shadow;
      }
    },
  },
});

export const { closeAll, togglePopup } = popup.actions;
export default popup.reducer;
