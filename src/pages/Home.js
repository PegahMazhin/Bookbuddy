import React from 'react';
import { Link } from 'react-router-dom';

function Home({ books }) {
  return (
    <div>
      <h1>Library Catalog</h1>
      {books.map(book => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <img src={book.coverimage} alt={`${book.title} cover`} />
          <Link to={`/books/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
