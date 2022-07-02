import { ADD_FORM, DELETE_FORM, EDIT_FORM } from "./action-types";

export const addForm = (data) => {
  // console.log(data.img);
  return {
    type: ADD_FORM,
    data,
  };
};

export const editForm = (data) => {
  return {
    type: EDIT_FORM,
    data,
  };
};

export const deleteForm = (data) => {
  return {
    type: DELETE_FORM,
    data,
  };
};
