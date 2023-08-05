import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AddBook from './components/AddBook';
import BookList from './components/BookList';
import Home from './components/Home';
import NotFound from './components/NotFound';
import UpdateBook from './components/UpdateBook';

import './App.css';

/*
Welcome to the main JS file, App.js.
This is where the navbar comes into play as well.
Pretty neat navbar, not too much, not too little.
*/

const Navigation = () => {
  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'> </Navbar.Brand>
        <Navbar.Collapse className='navbar-pages' as={Link} to="/">
        <Nav>
            <Nav.Link className='page-link' as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className='page-link' as={Link} to="/books">
              Book List
            </Nav.Link>
            <Nav.Link className='page-link' as={Link} to="/books/add">
              Add Book
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/update/:id" element={<UpdateBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
