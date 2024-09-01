// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice.js";
import shapeReducer  from "../slices/shapeSlice.js";
export default configureStore({
  reducer: {
    user: userReducer,
    shapes: shapeReducer,
    // Add other reducers if needed
  },
});
