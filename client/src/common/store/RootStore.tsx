import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { locationSlice } from './LocationStore';
import { createdPostSlice } from '../../pages/Write/store/CreatedPost';
import { filteredListSlice } from '../../pages/Lists/store/FilteredList';
import { setSignupSlice } from '../../pages/Signup/store/createSignupUser';

const rootReducer = combineReducers({
  location: locationSlice.reducer,
  createdPost: createdPostSlice.reducer,
  filteredList : filteredListSlice.reducer,
  signup: setSignupSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
