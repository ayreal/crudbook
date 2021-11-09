import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { getBooks, deleteBook } from '../datasource';
import { BookCard } from '../components/BookCard';
import { Header, Heading, Button } from '../components/ui';

const BooksList = styled.ul`
  list-style-type: none;
  padding: unset;
  margin: unset;
`;

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getBooks();
      setBooks(data);
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    const data = await deleteBook(id);
    setBooks(data);
  };

  return (
    <>
      <Header>
        <Heading>Bookshelf</Heading>
        <Link href="/books/add">
          <Button role="link">Add Book</Button>
        </Link>
      </Header>
      <main>
        {books.length > 0 ? (
          <BooksList>
            {books.map((book) => (
              <BookCard key={book.id} handleDelete={handleDelete} {...book} />
            ))}
          </BooksList>
        ) : (
          <pre>Loading</pre>
        )}
      </main>
    </>
  );
}
