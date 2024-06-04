import { 
    ADD_PHONE_TO_BASKET,
    CLEAN_BASKET,
    REMOVE_PHONE_FROM_BASKET,
} from './actionTypes'

const initialState = {
    basket: [],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PHONE_TO_BASKET: {
            return {
                ...state,
                basket: [...state.basket, payload]
            }
        }

        case REMOVE_PHONE_FROM_BASKET: {
            return {
                ...state,
                basket: state.basket.filter((item) => item !== payload)
            }
        }

        case CLEAN_BASKET: {
            return initialState
        }

        default:
            return state
    }
}