//INITIAL STATE
const INITIAL_STATE = {
    id: 0,
    username: '',
    profile_pic: ''
}

//action types
const UPDATE_USER = 'UPDATE_USER';



//reducer function w/ switch!
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case UPDATE_USER:
            return Object.assign({}, state, {
                id: action.payload.id,
                username: action.payload.username,
                profile_pic: action.payload.profile_pic
            });
        default:
            return state
    }
}

//action creators

export function getUser(id, username, profile_pic) {
    return {
        type: UPDATE_USER,
        payload: {
            id,
            username,
            profile_pic,
        }
    }
}