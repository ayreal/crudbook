import Link from 'next/link';
import { AddBookForm } from '../../components/AddBookForm';
import { Header, Heading, IconButton } from '../../components/ui';

export default function AddBook() {
  return (
    <>
      <Header>
        <Heading>Add a new book</Heading>
        <Link href="/">
          <IconButton>
            <span className="material-icons">clear</span>
          </IconButton>
        </Link>
      </Header>
      <main>
        <AddBookForm />
      </main>
    </>
  );
}
