import BookstoreAPI from '../../services/bookstoreAPI';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const SET_ALL_BOOKS = 'bookStore/books/SET_ALL_BOOKS';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const setAllBooks = (payload) => ({
  type: SET_ALL_BOOKS,
  payload,
});

export const setAllBooksFromAPI = () => (dispatch) => {
  BookstoreAPI.getBooksFromAPI().then((data) => {
    const books = [];
    Object.entries(data).forEach(([id, info]) => {
      const { title: APItitle, category } = info[0];
      const [title, author] = APItitle.split('-');
      const newBook = {
        id,
        title,
        category,
        author,
      };
      books.push(newBook);
    });
    dispatch(setAllBooks(books));
  });
};

export const addBookAsync = (book) => (dispatch) => {
  const {
    id, title, category, author,
  } = book;
  const APIbook = {
    item_id: id,
    category,
    title: `${title} - ${author}`,
  };
  BookstoreAPI.addBookToAPI(APIbook).then(() => dispatch(addBook(book)));
};

export const removeBookAsync = (id) => (dispatch) => {
  BookstoreAPI.deleteBookFromAPI(id).then(() => dispatch(removeBook(id)));
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case SET_ALL_BOOKS:
      return action.payload;

    default:
      return state;
  }
};

export default booksReducer;
