///redux 자료 저장하는 store 파일

import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";
//컴포넌트 간 state 공유가 편해져서 씀!

//useState와 비슷한 역할

// let user = createSlice({
//   name: "user",
//   initialState: { name: "kim", age: 20 },

//   //수정하고 싶을 때 함수 먼저 만들기
//   reducers: {
//     nameChange(state) {
//       state.name = "park";
//     },
//     ageChange(state, a) {
//       state.age += a.payload;
//     },
//   },
// });

let product = createSlice({
  name: "product",
  initialState: [
    { id: 1, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    //위에서 만든 걸 등록해야 쓸 수 있음
    product: product.reducer,
    user: user.reducer,
  },
});
