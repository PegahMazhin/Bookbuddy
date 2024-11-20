import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById, updateBookAvailability } from '../services/api';

function BookDetails({ user }) {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchBook() {
      const fetchedBook = await getBookById(bookId);
      setBook(fetchedBook);
    }
    fetchBook();
  }, [bookId]);

  const handleCheckOutOrReturn = async () => {
    if (!user) {
      setError('You must be logged in to perform this action.');
      return;
    }

    const updatedBook = await updateBookAvailability(bookId, !book.available, user.token);
    setBook(updatedBook);
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <img src={book.coverimage} alt={`${book.title} cover`} />
      <p>{book.available ? 'Available' : 'Checked Out'}</p>
      <button onClick={handleCheckOutOrReturn}>
        {book.available ? 'Check Out' : 'Return'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default BookDetails;
