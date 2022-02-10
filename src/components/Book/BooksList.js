import React from "react";

const BooksList = ({
  isLoading,
  books,
  isLoggedIn,
  deleteBook,
  dispatch,
  getBookId,
}) => {
  const bookList =
    books && books.length > 0
      ? books.map((book) => (
          <li
            className="list-group-item d-flex  justify-content-between align-items-center"
            key={book.id}
          >
            <div>{book.title}</div>
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => getBookId(book.id)}
              >
                Read
              </button>
              <button
                type="button"
                className="btn btn-danger"
                disabled={!isLoggedIn}
                onClick={() =>
                  dispatch(deleteBook(book)).then((data) => {
                    console.log(data);
                  })
                }
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : "There is no book";

  return (
    <div>
      <h2>Books List</h2>

      {isLoading ? "Loading...." : <ul className="list-group">{bookList}</ul>}
    </div>
  );
};

export default BooksList;
