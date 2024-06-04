export const getCategories = state => {
    const categories = Object.values(state.categories)
    return categories
}