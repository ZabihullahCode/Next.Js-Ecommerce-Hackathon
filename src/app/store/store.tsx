import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "./features/product";
import  cartSlice from "./features/cart";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import  storage  from "redux-persist/lib/storage";
// ...

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const reducer = combineReducers({
  products: productSlice,
  cart: cartSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer)
 
export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({serializableCheck: false}),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
