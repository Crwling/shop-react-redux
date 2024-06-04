export const getPhoneById = (state, id) => state.phones.data[id]

export const getSelectedPhone = (state) => state.phones.phone

export const getPhones = (state, categoryId) => {
    const phones = state.phones.ids.map(id => getPhoneById(state, id))
    return categoryId ?
     phones.filter((item) => item.categoryId === categoryId) :
     phones
}

export const getSearch = state => {
    return state.phones.search
}

export const getRenderedPhonesLength = state => state.phones.ids.length
