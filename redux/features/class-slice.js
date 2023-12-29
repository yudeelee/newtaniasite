import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  classes: [],
  selected: null,
  latestId: 1,
};

export const cl = createSlice({
  name: 'classes',
  initialState,
  reducers: {
    addClass(state, action) {
      const cl = state.classes.find((cl) => cl.name === action.payload.name);
      if (!cl) {
        state.classes.push({
          ...action.payload,
          id: state.latestId + 1,
          properties: {},
        });
        state.latestId += 1;
      }
    },
    deleteClass(state, action) {
      return state;
    },
    setSelectedClass(state, action) {
      state.selected = action.payload;
    },
    setProperty(state, action) {
      const cl = state.classes.find((c) => c.name === state.selected);
      const clIdx = state.classes.findIndex((c) => c.name === state.selected);
      cl.properties[action.payload.propName] = action.payload.propValue;
      state.classes[clIdx] = cl;
    },
  },
});

export const { addClass, deleteClass, setSelectedClass, setProperty } =
  cl.actions;
export default cl.reducer;
