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

const Spinner = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (e) {
        console.log('Error fetching books', e);
      }
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
        <Link href="/books/add" passHref>
          <Button role="link">Add Book</Button>
        </Link>
      </Header>
      <main>
        {/* TODO: Add error / No books states */}
        {books?.length > 0 ? (
          <BooksList>
            {books.map((book) => (
              <BookCard key={book.id} handleDelete={handleDelete} {...book} />
            ))}
          </BooksList>
        ) : (
          <Spinner>
            <span className="material-icons">cached</span>
          </Spinner>
        )}
      </main>
    </>
  );
}
