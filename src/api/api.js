export const getBooks = () => {
   return Vue.http.get(`https://www.anapioficeandfire.com/api/books`) 
}

export const getBookDetails = (id) => {
   return Vue.http.get(`https://www.anapioficeandfire.com/api/books/${id}`) 
}

export const charactersDetails = (url) => {
   return Vue.http.get(`${url}`) 
}