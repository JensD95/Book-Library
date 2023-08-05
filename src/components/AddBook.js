import axios from 'axios';
import React, { useState } from 'react';
import '../App.css';


/*
This component displays a form that allows a user to add their desired book to their library.
There are two input fields on this form, one for the book's title and one for the book's author.
Below the two input fields is a button that submits the inputted data to the api.
*/

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBook = { title, author };
      await axios.post('https://64c71bd40a25021fde921313.mockapi.io/Books', newBook);
      setTitle('');
      setAuthor('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div>
      <h2 className='home-header'>Add Book</h2>
      <form className='add-book-form' onSubmit={handleSubmit}>
        <input
          type="text"
          className='add-book-input'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <br/>
        <input
          type="text"
            className='add-book-input'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <br/>
        <button className='add-book-submit' type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
