import { legacy_createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import todosReducer from "./store/Todos";
//  کدهای ریداکس پرسیست برای همین سمت. سمت فایل ایندکس آن را هم باید بذارم  const persistConfig = {


//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, todosReducer)
// export const store = createStore(persistedReducer);

// export const persistor = persistStore(store);
const store = legacy_createStore(todosReducer);
export default store;