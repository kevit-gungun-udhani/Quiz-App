import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './user-slice'
import quizReducer from './quiz-slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const persistRootConfig = {
  key: 'root',
  storage,
  blacklist: ['quiz'],
}


const rootReducer = combineReducers({
  user: userReducer,
  quiz: quizReducer
})



const persistedReducer = persistReducer(persistRootConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer
});

const persistor = persistStore(store);

export  { store, persistor };