export const ADD_NOTE = "ADD_TODO";
export const DELETE_NOTE = "TOGGLE_TODO";
export const EDIT_NOTE = "EDIT_NOTE";
export const CREATE_USER = "CREATE_USER";
export const USER_LOGIN = "USER_LOGIN";



type note = {
  title: string;
  content: string;
  date_created: Date;
  date_editted: Date | null;
};

type user = {
  name: string;
  password: string;
};

export function addNote(note: note) {
  return { type: ADD_NOTE, note };
}

export function deleteNote(note: note) {
  return { type: DELETE_NOTE, note };
}

export function editNote(note: note) {
  return { type: EDIT_NOTE, note };
}

export function createUser(user: user) {
  return { type: CREATE_USER, user };
}

export function userLogin(uesr:user){
    return {type:USER_LOGIN, }
}