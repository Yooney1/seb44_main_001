import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { categorySlice } from './CategoryStore';
import { locationSlice } from './LocationStore';
import { selectedCategorySlice } from '../../pages/Lists,Search/store/SelectedCategory';
import { selectedLocationSlice } from '../../pages/Lists,Search/store/SelectedLocation';
import { createdPostSlice } from '../../pages/Write,Edit/store/CreatedPost';
import { setSignupSlice } from '../../pages/Signup/store/SignupUser';
import { setLoginSlice } from '../../pages/Login/store/LoginUser';
import { memberSlice } from '../../pages/User/store/MemberStore';
import { totalCommentsSlice } from './CommentPageStore';
import { tokenSlice } from '../../pages/Login/store/userTokenStore';
import { myDataSlice } from '../../pages/Login/store/MyUserData';
import { chatModalSlice } from './ChatModalStore';
import { updatedUserSlice } from '../../pages/Kakao-signup/store/UpdatedUserData';
import { chatRoomInfoSlice } from './ChatRoomInfoStore';
import { chatInvitationModalSlice } from '../components/Chat/store/ChatInvitationModal';

const rootReducer = combineReducers({
  category: categorySlice.reducer,
  location: locationSlice.reducer,
  selectedCategory: selectedCategorySlice.reducer,
  selectedLocation: selectedLocationSlice.reducer,
  createdPost: createdPostSlice.reducer,
  signup: setSignupSlice.reducer,
  login: setLoginSlice.reducer,
  token: tokenSlice.reducer,
  myData: myDataSlice.reducer,
  member: memberSlice.reducer,
  authSignup: updatedUserSlice.reducer,
  totalComments: totalCommentsSlice.reducer,
  chatRoomInfo: chatRoomInfoSlice.reducer,
  chatModal: chatModalSlice.reducer,
  chatInvitationModal: chatInvitationModalSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
