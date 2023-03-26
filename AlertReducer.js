import { SHOW_MODAL, HIDE_MODAL } from "./Action";

const initialState = {
    isModalVisible: false,
    Message: ''
};



const alertreducers = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                isModalVisible: true,
                Message: action.Message
            };
        case HIDE_MODAL:
            return { isModalVisible: false };
        default:
            return state;
    }
}

export default alertreducers;