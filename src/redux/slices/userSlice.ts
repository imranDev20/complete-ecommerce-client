import { createSlice } from "@reduxjs/toolkit";

type UsersState = {
  email: string;
};

const initialState: UsersState = {
  email: "user@email.com",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoggedIn: (state) => state,
    createUser: (state, action) => state,
  },
});

export const { userLoggedIn, createUser } = userSlice.actions;
export default userSlice.reducer;
