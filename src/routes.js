/* eslint-disable linebreak-style */
const { addBook, getBook, getBookById, delBook, upBook } = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBook
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: upBook
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: delBook
  }
]

module.exports = routes
