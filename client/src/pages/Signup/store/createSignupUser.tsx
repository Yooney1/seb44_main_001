import { configureStore, createSlice } from '@reduxjs/toolkit';

export const setSignupSlice = createSlice({
  name: 'signup',
  initialState: {
    email: '',
    password: '',
    nickName: '',
    birthYear: 0,
    gender: null,
    location: null,
    welcome_msg: '',
  },
  reducers: {
    setSignupUser: (_state, action) => {
      console.log(action.payload); //! 배포 시 삭제
      return {
        email: action.payload.email,
        password: action.payload.password,
        nickName: action.payload.nickName,
        birthYear: action.payload.birthYear,
        gender: action.payload.gender,
        location: action.payload.location,
        welcome_msg: action.payload.welcome_msg,
      };
    },
  },
});

export const store = configureStore({
  reducer: setSignupSlice.reducer,
});

export const { setSignupUser } = setSignupSlice.actions;
