import Link from 'next/link';
import { AddBookForm } from '../../components/AddBookForm';
import { Heading } from '../../components/ui';

export default function AddBook() {
  return (
    <>
      <Heading>Add a new book</Heading>
      <main>
        <AddBookForm />
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </main>
    </>
  );
}
