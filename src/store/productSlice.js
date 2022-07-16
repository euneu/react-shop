import { createSlice } from "@reduxjs/toolkit";
let product = createSlice({
  name: "product",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],

  reducers: {
    setCount(state, action) {
      //findIndx는 인덱스를 반환함
      let id = state.findIndex((x) => x.id == action.payload);
      state[id].count++;
    },
    addProduct(state, action) {
      console.log(action.payload.id);
      let id = state.findIndex((x) => x.id == action.payload.id);
      //장바구니 안에 있는 상품이라면
      if (id != -1) {
        state[id].count += parseInt(action.payload.count);
      } else {
        state.push(action.payload);
      }
    },
    removeProduct(state, action) {
      let result = state.filter((x) => x.id !== action.payload);
      return result;
    },
  },
});

export let { setCount, addProduct, removeProduct } = product.actions;

export default product;
