import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logInOut } from "../store/authSlice";

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <Fragment>
      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <nav className="navbar navbar-dark">
        <span className="navbar-brand mb-0 h1 text-dark">My Books</span>

        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => dispatch(logInOut())}
        >
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </nav>
    </Fragment>
  );
};

export default Header;
