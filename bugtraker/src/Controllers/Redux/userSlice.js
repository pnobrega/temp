import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({ name: "Paulo Nobrega" });
      state.push({ name: "David" });
    },
  },
});

export default slice.reducer;

export const { getUser } = slice.actions;
