import React from 'react';
import '../App.css';

/*
This is a component that displays the home page containing a welcome message, a brief description of the app, and some acknowledgements.
This is the default page to open when the server is started and it is also called when the "Home" button is selected.
*/

const Home = () => {
  return (
    <div className='home-page-content'>
      <h2 className='home-header'>myLibrary</h2>
      <p className='home-body'>
        This CRUD app uses an api to store a custom library built by the user
        <br/>
        <br/>
        <br/>
        <br/>
        Select "Book List" to view your library
        <br/>
        ~~~~~~~~~~~~~~~~~~~~~~~~~or~~~~~~~~~~~~~~~~~~~~~~~~~
        <br/>
        Select "Add Book" to add a new book to your library
      </p>
      <div></div>
      <p className='home-body'>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        Style suggestions by my sweet little girl, <br/>Adley B
        <br/>
        <br/>
        App concept inspired by my amazing wife, <br/>Brittany
      </p>
    </div>
  );
};

export default Home;
