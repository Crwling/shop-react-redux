import * as actionTypes from "./actionTypes";

export const addPhoneToBasketAction = (id) => ({
    type: actionTypes.ADD_PHONE_TO_BASKET,
    payload: id,
})

export const removePhoneFromBasket = id => ({
    type: actionTypes.REMOVE_PHONE_FROM_BASKET,
    payload: id,
})

export const cleanBasket = () => ({
    type: actionTypes.CLEAN_BASKET,
})
