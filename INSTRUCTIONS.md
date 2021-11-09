# mmhmm web take home challenge

For this takehome challenge, you will be building a React application to manage the books on your bookshelf.

[FIGMA LINK](https://www.figma.com/file/OwTYneXwIbbOYEuNtJYHln/All-Turtles-Web-Dev-Pairing-Interview?node-id=511%3A93)

## Time management

We respect your time and don't want this to take more than 3 hours. Please get as much done as you can within 3 hours, but don't spend all day on it. If you don't finish, it's okay.

## Evaluation

Following completion of the challenge, there will be a video call interview. In that interview, we'll be looking for a few things:

- Ability to effectively communicate about the code you wrote. Share your screen and talk us through your thought process. What's an interesting problem you solved while completing this challenge?

- Strong React & JavaScript fundamentals.

- Ability to turn designs and ideas into functional web applications (CSS, using design software to guide you, etc).

- What would you do next if you had more time?

## Getting started

- Create a new GitHub repository.
- Start with a React boilerplate / framework of your choosing.
- Commit the challenge to the repo and be prepared to talk about it at the interview.

## The challenge

Using the bookshelf API (documented below), create an application with the following features:

- The root route should render a title, an add new button, and the list of books.
- The button should link to a new route with a form to add a new book.
- The form should have 4 fields, "title", "author", "description", and "imageUrl" (see design).
- Submitting the form should add a new book to the database.
- Use the [design file](https://www.figma.com/file/OwTYneXwIbbOYEuNtJYHln/All-Turtles-Web-Dev-Pairing-Interview?node-id=511%3A93) and try your best to match it.

## API Docs

The API has 3 routes. All routes are unauthenticated.

The base URL of the API is `https://us-central1-all-turtles-interview.cloudfunctions.net`.

### `GET /books`

Returns an array of book objects.

```
[
  {
    "id": String,
    "description": String,
    "imageUrl": String,
    "author": String,
    "title": String
  }
]
```

### `POST /books`

Adds a new book to the database and returns the updated list of books.

The request should have the content-type header set to `application/json`.

The API accepts a book object as the request body.

```
body: {
  "description": String,
  "imageUrl": String,
  "author": String,
  "title": String
}
```

When testing, use `https://picsum.photos/125/200` as the `imageUrl`.

### `DELETE /books/:bookId`

Removes a book from the database.

Returns the updated list of books.

## Design

There's a design file to work from. A Figma account is recommended. Try and get as close to the design file as you can.

https://www.figma.com/file/OwTYneXwIbbOYEuNtJYHln/All-Turtles-Web-Dev-Pairing-Interview?node-id=0%3A1
