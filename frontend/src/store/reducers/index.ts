import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, CREATE_USER, USER_LOGIN } from "../actions";
import { combineReducers } from "redux";

const initialState={
    user:null

}

function notes(state = [], action: any) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          text: action.text,
        }
      ];
    case DELETE_NOTE:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case EDIT_NOTE:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];

    default:
      return state;
  }
}

function users(state = [], action:any) {
  switch (action.type) {
    case CREATE_USER:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case USER_LOGIN:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
}
