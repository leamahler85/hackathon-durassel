import React, { useContext } from "react";
import "../../app.css";
import Login from "../Login";
import Board from "../Board";
import Navigation from "../Navigation";
import UserContext from "../../contexts/UserContext";

const LayoutBoard = () => {
  const { list, user } = useContext(UserContext);

  return (
    <>
      <div className="Login d-flex align-items-end flex-column mr-3">
        {user ? (
          <>
            <p>{user.email}</p>
            <a href="/api/logout">Déconnexion</a>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="App">
        {user ? (
          <>
            <Navigation />
            <Board list={list} />
          </>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
};

export default LayoutBoard;
