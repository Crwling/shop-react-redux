import phones from './mockPhones'
import categories from './mockCategories'
import request from 'superagent'

export const fetchPhones = async () => {
    // const {body} = await request.get(
    //     'https://run.mocky.io/v3/33388130-d5c4-4639-820b-79a4041bc0f7'
    // ).then(res => return body.phones)
    // return body.phones
    return new Promise((resolve, reject) => {
        resolve(phones)
    })
}

export const loadMorePhones = async ({ offset }) => {
    //например, fetch.get(`http://google.com/api/phones?offset=${offset}`)
    return new Promise((resolve, reject) => {
        resolve(phones)
    })
}

export const fetchPhoneById = async (id) => {
    return new Promise((resolve, reject) => {
        const phone = phones.find((item) => item.id === id)
        resolve(phone)
    })
}

export const fetchCategories = async () => {
    return new Promise((resolve, reject) => {
        resolve(categories)
    })
}
