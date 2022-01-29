export default class BookstoreAPI {
  static BASEURL =
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

  static ID = 'f2t7qderqVUd430ETjkz';

  static getBooksFromAPI = async () => {
    const url = `${this.BASEURL}/apps/${this.ID}/books`;
    const response = url;
    await fetch(url);
    return response.json();
  };

  static addBookToAPI = async (data) => {
    const url = `${this.BASEURL}/apps/${this.ID}/books`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response;
  };

  static deleteBookFromAPI = async (id) => {
    const url = `${this.BASEURL}/apps/${this.ID}/books/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
    });
    return response;
  };
}
