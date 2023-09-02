import { PROFILE_SUCCESS, PROFILE_ERROR } from "../actionTypes/actionTypes";

const profileSuccess = (profile) => {
  return {
    type: PROFILE_SUCCESS,
    payload: profile,
  };
};

const profileFail = () => {
  return {
    type: PROFILE_ERROR,
  };
};

export { profileSuccess, profileFail };
