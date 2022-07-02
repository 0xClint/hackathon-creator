import { ADD_FORM, DELETE_FORM, EDIT_FORM, SEARCH_FORM } from "./action-types";

const initialList = () => {
  const list = localStorage.getItem("form-list");
  let form = [];
  if (list) {
    form = JSON.parse(list);
  }
  return form;
};

const initialState = {
  FormList: initialList(),
};

export const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM: {
      localStorage.setItem(
        "form-list",
        JSON.stringify([...state.FormList, action.data])
      );
      return {
        ...state,
        FormList: [...state.FormList, action.data],
      };
    }

    case EDIT_FORM: {
      const { data } = action;

      const updatedList = state.FormList.filter((item) => item.id !== data.id);
      updatedList.push(data);
      localStorage.setItem("form-list", JSON.stringify(updatedList));
      return {
        ...state,
        FormList: updatedList,
      };
    }

    case DELETE_FORM: {
      const { data } = action;

      const updatedList = state.FormList.filter((item) => item.id !== data.id);
      localStorage.setItem("form-list", JSON.stringify(updatedList));
      return {
        ...state,
        FormList: updatedList,
      };
    }
    default:
      return state;
  }
};
