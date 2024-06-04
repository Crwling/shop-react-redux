import { 
    FETCH_PHONES_SUCCESS,
    FETCH_PHONE_BY_ID_SUCCESS,
    LOAD_MORE_PHONES_SUCCESS,
    SEARCH_PHONE,
} from './actionTypes'

const initialState = {
    data: {},
    ids: [],
    phone: undefined,
    search: "",
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS: {
            const map = {}
            const phoneIds = []
            payload.map((item) => {
                map[item.id] = item
                phoneIds.push(item.id)
            });
            

            return {
                ...state,
                data: {
                    ...state.phones,
                    ...map
                },
                ids: phoneIds
            }
        }
        
        case LOAD_MORE_PHONES_SUCCESS: {
            const moreMap = {}
            const morePhoneIds = []
            payload.map((item) => {
                moreMap[item.id] = item
                morePhoneIds.push(item.id)
            });
            

            return {
                ...state,
                data: {
                    ...state.phones,
                    ...moreMap
                },
                ids: [
                    ...state.ids,
                    ...morePhoneIds
                ]
            }
        }

        case FETCH_PHONE_BY_ID_SUCCESS: {
            return {
                ...state,
                phone: payload
            }
        }

        case SEARCH_PHONE: {
            return {
                ...state,
                search: payload
            }
        }

        default:
            return state
    }
}
