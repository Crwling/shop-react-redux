import {
    addPhoneToBasketAction,
    removePhoneFromBasket as removePhoneFromBasketAction,
    cleanBasket as cleanBasketAction
} from './actions'

export const addPhoneToBasket = (id) => dispatch => {
    dispatch(addPhoneToBasketAction(id))
}

export const removePhoneFromBasket = (id) => dispatch => (
    dispatch(removePhoneFromBasketAction(id))
)

export const cleanBasket = () => dispatch => (
    dispatch(cleanBasketAction())
)

export const basketCheckout = phones => () => {
    alert(JSON.stringify(phones))
}
