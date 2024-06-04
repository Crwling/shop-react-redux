import { FETCH_CATEGORIES_SUCCESS } from './actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_CATEGORIES_SUCCESS:
            const map = {}
            payload.map((item) => {
                map[item.id] = item
            });
            
            return {
                ...state,
                ...map
            }

        default:
            return state
    }
}