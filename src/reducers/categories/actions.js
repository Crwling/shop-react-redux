import * as actionTypes from "./actionTypes";

export const fetchCategoriesRequest = () => ({
    type: actionTypes.FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSuccess = (categories) => ({
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: categories,
});

export const fetchCategoriesFailure = (err) => ({
    type: actionTypes.FETCH_CATEGORIES_FAILURE,
    payload: err,
    error: true,
})
