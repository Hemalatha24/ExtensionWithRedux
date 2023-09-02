import { PROFILE_SUCCESS, PROFILE_ERROR } from "../actionTypes/actionTypes";

const initialState = {
  profile: {},
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: "Profile Fetch failed"
      };
    default:
      return state;
  }
};

