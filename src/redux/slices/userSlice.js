// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const { firstName, lastName, role } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.role = role;
    },
    clearUser(state) {
      state.firstName = "";
      state.lastName = "";
      state.role = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
