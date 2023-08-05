import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css';
import UpdateBookModal from './UpdateBook';

/*
This is a component that holds an array of all books that have been added to the user's library, stored in an api.
Each book in the api is displayed according to their index in the array.
Additionally, I have styled the linked CSS classes to customize the books to appear similar to real books.
*/

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://64c71bd40a25021fde921313.mockapi.io/Books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://64c71bd40a25021fde921313.mockapi.io/Books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleUpdate = (book) => {
    setSelectedBook(book);
  };

  const handleUpdateBook = async (updatedBook) => {
    try {
      await axios.put(
        `https://64c71bd40a25021fde921313.mockapi.io/Books/${updatedBook.id}`,
        updatedBook
      );
      fetchBooks();
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div>
      <h2 className='home-header'>Book List</h2>
      {books.map((book) => (
        <div className='book-shroud'key={book.id}>
          <h3 className='book-title'>{book.title}</h3>
          <div>
            <p className='book-author-intro'>By: </p>
            <p className='book-author'>{book.author}</p>
            </div>
          <button className='book-action' onClick={() => handleDelete(book.id)}>Delete</button>
          <button className='book-action' onClick={() => handleUpdate(book)}>Update</button>
        </div>
      ))}
        {selectedBook && (
        <UpdateBookModal
          show={true}
          onHide={() => setSelectedBook(null)}
          book={selectedBook}
          onUpdateBook={handleUpdateBook}
        />
      )}
    </div>
  );
};

export default BookList;
