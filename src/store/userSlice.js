import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },

  reducers: {
    nameChange(state) {
      state.name = "park";
    },
    ageChange(state) {
      state.age += 1;
    },
  },
});

//자료를 빼서 export
export let { nameChange, ageChange } = user.actions;

export default user;
