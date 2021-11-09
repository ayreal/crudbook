import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getBooks, deleteBook } from '../datasource';
import { BookCard } from '../components/BookCard';
import { Heading, Button } from '../components/ui';

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
      <Heading>Bookshelf</Heading>
      <Link href="/books/add">
        <Button>Add Book</Button>
      </Link>
      <main>
        {books.length > 0 ? (
          <ul>
            {books.map((book) => (
              <BookCard key={book.id} handleDelete={handleDelete} {...book} />
            ))}
          </ul>
        ) : (
          <pre>Loading</pre>
        )}
      </main>
    </>
  );
}
