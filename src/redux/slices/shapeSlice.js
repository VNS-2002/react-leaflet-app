// shapeSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  shapes: [],
};

const shapeSlice = createSlice({
  name: "shapes",
  initialState,
  reducers: {
    addShape(state, action) {
      const shape = { id: uuidv4(), ...action.payload };
      state.shapes.push(shape);
    },
    removeShape(state, action) {
      const { id } = action.payload;
      state.shapes = state.shapes.filter(shape => shape.id !== id);
    },
    clearShapes(state) {
      state.shapes = [];
    },
  },
});

export const { addShape, removeShape, clearShapes } = shapeSlice.actions;

export default shapeSlice.reducer;
