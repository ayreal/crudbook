const ROOT_URL =
  'https://us-central1-all-turtles-interview.cloudfunctions.net/books';

export const getBooks = async () => {
  const res = await fetch(ROOT_URL);
  const data = await res.json();
  return data;
};

export const addBook = async (data = {}) =>
  await fetch(ROOT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

export const deleteBook = async (id) => {
  const res = await fetch(`${ROOT_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
};
