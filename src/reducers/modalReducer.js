import { IS_OPEN } from "../actions/openModal";

let initialState = {
  showModal: false
};

export function handlePopUp(state = initialState, action) {
  switch (action.type) {
    case IS_OPEN:
      return !state;
    default:
      return state;
  }
}
