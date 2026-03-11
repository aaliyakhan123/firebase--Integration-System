import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { ref, push, onValue, remove } from "firebase/database";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { dispatch }) => {
    const productsRef = ref(db, "products");

    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      const list = [];

      if (data) {
        Object.keys(data).forEach((key) => {
          list.push({ id: key, ...data[key] });
        });
      }

      dispatch(setProducts(list));
    });
  }
);

export const addProductToDB = createAsyncThunk(
  "products/addProductToDB",
  async (product) => {
    const productsRef = ref(db, "products");
    await push(productsRef, product);
  }
);

export const deleteProductFromDB = createAsyncThunk(
  "products/deleteProductFromDB",
  async (id) => {
    const productRef = ref(db, `products/${id}`);
    await remove(productRef);
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: []
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    }
  }
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;