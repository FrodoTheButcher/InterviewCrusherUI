import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../Constants/userConstants";
import axios from "axios";
import { DecodeError } from "./errorHandling";

export const userRegisterAction = (userData) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const { data } = await axios.post("/api/users/", userData);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: userData });
  } catch (e) {
    dispatch({ type: USER_REGISTER_FAIL, payload: DecodeError(e) });
  }
};
