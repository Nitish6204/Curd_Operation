import { SHOW_LOADER, HIDE_LOADER } from "./Action";

const initialState = {
    isSpinnerVisible: false
};

const loaderreducers = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                isSpinnerVisible: true
            };
        case HIDE_LOADER:
            return {
                isSpinnerVisible: false
            };
        default:
            return state;
    }
}

export default loaderreducers;