import * as actionTypes from "./actionTypes";

export const fetchPhonesRequest = () => ({
    type: actionTypes.FETCH_PHONES_REQUEST,
});

export const fetchPhonesSuccess = (phones) => ({
    type: actionTypes.FETCH_PHONES_SUCCESS,
    payload: phones,
});

export const fetchPhonesFailure = (err) => ({
    type: actionTypes.FETCH_PHONES_FAILURE,
    payload: err,
    error: true,
})

export const loadMorePhonesRequest = () => ({
    type: actionTypes.LOAD_MORE_PHONES_REQUEST,
});

export const loadMorePhonesSuccess = (phones) => ({
    type: actionTypes.LOAD_MORE_PHONES_SUCCESS,
    payload: phones,
});

export const loadMorePhonesFailure = (err) => ({
    type: actionTypes.LOAD_MORE_PHONES_FAILURE,
    payload: err,
    error: true,
});

export const fetchPhoneByIdRequest = () => ({
    type: actionTypes.FETCH_PHONE_BY_ID_REQUEST,
});

export const fetchPhoneByIdSuccess = (phone) => ({
    type: actionTypes.FETCH_PHONE_BY_ID_SUCCESS,
    payload: phone,
});

export const fetchPhoneByIdFailure = (err) => ({
    type: actionTypes.FETCH_PHONE_BY_ID_FAILURE,
    payload: err,
    error: true,
})

export const searchPhone = text => dispatch => {
    dispatch({
        type: actionTypes.SEARCH_PHONE,
        payload: text
    })
}
