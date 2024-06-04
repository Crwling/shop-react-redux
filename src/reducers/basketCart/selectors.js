import { getPhoneById } from '../phones/selectors'

export const getTotalBasketCount = state => {
    
    return state.cart.basket.length || 0
}

export const getTotalBasketPrice = state => {
    const totalPrice = state.cart.basket.reduce((totalValue, id) => totalValue + getPhoneById(state, id).price, 0);
    return totalPrice;
}

export const getBasketPhonesWithCount = state => {
    const phones = state.cart.basket.map(id => getPhoneById(state, id))
    const phonesWithCount = [];
    phones.map((phone) => {
        let p = phonesWithCount.find((item) => item.id === phone.id)
        if (p) {
            p = {
                ...p,
                count: p.count++
            }
        } else {
            phonesWithCount.push({
                ...phone,
                count: 1,
            })
        }
    })

    return phonesWithCount;
}
