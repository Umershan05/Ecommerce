import { configureStore } from "@reduxjs/toolkit";
import WishlistSlice from "./slices/WishlistSlice";
import cartSlice from "./slices/cartSlice";

const store =configureStore({
    reducer:{
        wishlistReducer:WishlistSlice,
        cartReducer:cartSlice
    }
})
export default store