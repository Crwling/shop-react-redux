import { 
    fetchPhoneByIdFailure,
    fetchPhoneByIdRequest,
    fetchPhoneByIdSuccess,
    fetchPhonesFailure, 
    fetchPhonesRequest, 
    fetchPhonesSuccess, 
    loadMorePhonesFailure, 
    loadMorePhonesRequest, 
    loadMorePhonesSuccess,
    searchPhone as searchPhoneAction
} from './actions'
import { 
    fetchPhones as fetchPhonesApi, 
    loadMorePhones as loadMorePhonesApi, 
    fetchPhoneById as fetchPhoneByIdApi
} from '../../actions/api'
import { getRenderedPhonesLength } from './selectors'

export const fetchPhones = () => async dispatch => {
    dispatch(fetchPhonesRequest())

    try {
        const phones = await fetchPhonesApi()
        dispatch(fetchPhonesSuccess(phones))
    } catch (err) {
        dispatch(fetchPhonesFailure(err))
    }
}

export const loadMorePhones = () => async (dispatch, getState) => {
    const offset = getRenderedPhonesLength(getState())
    dispatch(loadMorePhonesRequest())

    try {
        const phones = await loadMorePhonesApi({offset})
        dispatch(loadMorePhonesSuccess(phones))
    } catch (err) {
        dispatch(loadMorePhonesFailure(err))
    }
}

export const fetchPhoneById = (id) => async (dispatch) => {
    dispatch(fetchPhoneByIdRequest())

    try {
        const phone = await fetchPhoneByIdApi(id)
        dispatch(fetchPhoneByIdSuccess(phone))
    } catch (err) {
        dispatch(fetchPhoneByIdFailure(err))
    }
}

export const searchPhone = text => dispatch => {
    dispatch(searchPhoneAction(text))
}
