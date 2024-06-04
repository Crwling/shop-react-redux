import { 
    fetchCategoriesFailure,
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
} from './actions'
import {
    fetchCategories as fetchCategoriesApi
} from '../../actions/api'

export const fetchCategories = () => async dispatch => {
    dispatch(fetchCategoriesRequest())

    try {
        const categories = await fetchCategoriesApi()
        dispatch(fetchCategoriesSuccess(categories))
    } catch (err) {
        dispatch(fetchCategoriesFailure(err))
    }
}
