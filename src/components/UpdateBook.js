import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

/*
This is a component that allows the user to modify books currently stored in the api.
The button to call this component is located on each book, below the button to delete the selected book.
This component calls a modal to display the book update form.
Modals are cool.
*/

const UpdateBookModal = ({ show, onHide, book, onUpdateBook}) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const handleSubmit = () => {
    const updatedBook = {
      ...book,
      title: title,
      author: author,
    };
    onUpdateBook(updatedBook);
    onHide();

  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title className='update-header'>Update Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className='update-book-form' onSubmit={handleSubmit}>
          <input
            type="text"
            className='update-book-input'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            className='update-book-input'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
          />
            <Button className='update-book-submit' variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button className='update-book-submit' variant="primary" onClick={handleSubmit}>
          Update
        </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateBookModal;
