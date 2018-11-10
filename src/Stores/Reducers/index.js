import { combineReducers } from "redux";
import NewsReducer from "./NewsReducer";
import CategoryListReducer from "./CategoryListReducer";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import UserReducer from "./UserReducer";
import DeliveryReducer from "./DeliveryReducer";
import CheckoutReducer from "./CheckoutReducer";
import BookTableReducer from "./BookTableReducer";
import ChatReducer from "./ChatReducer";
import OrderReducer from "./OrderReducer";
import RatingReducer from "./RatingReducer";
import FavouritesReducer from "./FavouritesReducer";
import ContactReducer from "./ContactReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  form: formReducer,
  news: NewsReducer,
  categoryList: CategoryListReducer,
  product: ProductReducer,
  auth: UserReducer,
  cartItems: CartReducer,
  add: DeliveryReducer,
  order: CheckoutReducer,
  table: BookTableReducer,
  chat: ChatReducer,
  orders: OrderReducer,
  rate: RatingReducer,
  favourite: FavouritesReducer,
  contactInfo: ContactReducer
});
