import axios from 'axios'

const http = axios.create({baseURL: 'http://localhost:5000'})

export const listColumns = () =>  http.get('/columns').then(res => res.data)
export const getColumn = () => http.get('/columns/:id').then(res => res.data)
export const createColumn = () => http.put('/columns').then(res => res.data)
export const updateColumn = () => http.patch('/columns/:id').then(res => res.data)
export const deleteColumn = () => http.delete('/columns/:id').then(res => res.data)

export const listCards = () =>  http.get('/cards').then(res => res.data)
export const getCard = () => http.get('/cards/:id').then(res => res.data)
export const createCard = () => http.put('/cards').then(res => res.data)
export const updateCard = () => http.patch('/cards/:id').then(res => res.data)
export const deleteCard = () => http.delete('/cards/:id').then(res => res.data)
