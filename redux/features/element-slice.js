import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  elements: [
    {
      id: 1,
      type: 'div',
      attr: { className: '' },
      parentId: 0,
      selectedClass: '',
    },
    {
      id: 2,
      type: 'div',
      attr: { className: '' },
      parentId: 1,
      selectedClass: null,
    },
    {
      id: 3,
      type: 'div',
      attr: { className: '' },
      parentId: 1,
      selectedClass: '',
    },
    {
      id: 4,
      type: 'div',
      attr: { className: '' },
      parentId: 1,
      selectedClass: '',
    },
  ],
  selected: null,
  latestId: 5,
};

export const element = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    insertElement(state, action) {
      state.elements.push({ ...action.payload, id: state.latestId + 1 });
      state.latestId += 1;
    },
    deleteElement(state, action) {
      return state;
    },
    setSelected(state, action) {
      state.selected = action.payload;
    },
    setSelectedCl(state, action) {
      state.elements.find((el) => el.id == state.selected).selectedClass =
        action.payload;
    },
    insertClass(state, action) {
      const classes =
        state.elements
          .find((el) => el.id == state.selected)
          ?.attr?.className?.split(' ') || [];
      if (!classes?.includes(action.payload)) {
        classes?.push(action.payload);
        const newClasses = classes?.join(' ');
        state.elements.find((el) => el.id == state.selected).attr.className =
          newClasses;
      }
      state.elements.find((el) => el.id == state.selected).selectedClass =
        action.payload;
    },
    deleteClass(state, action) {
      const classes = state.elements
        .find((el) => el.id == state.selected)
        ?.attr?.className.split(' ');
      let newClasses = classes.filter((cl) => cl !== action.payload);
      newClasses = newClasses.join(' ');
      state.elements.find((el) => el.id == state.selected).attr.className =
        newClasses;
    },
    moveClass(state, action) {
      const classes = state.elements
        .find((el) => el.id == state.selected)
        ?.attr?.className.split(' ');
      let newClasses;
      if (action.payload.direction === 'up') {
        const idx = classes.findIndex((cl) => cl === action.payload.cl);
        const buffer = classes[idx];
        classes[idx] = classes[idx - 1];
        classes[idx - 1] = buffer;
        newClasses = classes.join(' ');
        state.elements.find((el) => el.id == state.selected).attr.className =
          newClasses;
      }
      if (action.payload.direction === 'down') {
        const idx = classes.findIndex((cl) => cl === action.payload.cl);
        const buffer = classes[idx];
        classes[idx] = classes[idx + 1];
        classes[idx + 1] = buffer;
        newClasses = classes.join(' ');
        state.elements.find((el) => el.id == state.selected).attr.className =
          newClasses;
      }
    },
  },
});

export const {
  insertElement,
  deleteElement,
  setSelected,
  setSelectedCl,
  insertClass,
  deleteClass,
  moveClass,
} = element.actions;
export default element.reducer;
