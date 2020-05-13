const CHANGE_TEXT = '2a_features/loginReducer/CHANGE_TEXT';

export type StateType = Array<string>;
type ActionType = addTextType;

let initialState: StateType = [];

const loginReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case CHANGE_TEXT:
            return {...state, text: action.text};
        default:
            return state;
    }
};

export const addTextAC = (text: string): addTextType => ({type: CHANGE_TEXT, text});

type addTextType = {
    type: typeof CHANGE_TEXT, text: string
}
export default loginReducer;