import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ session, logout }) => {

    return (
      <section>
        <p className="navbar-text">Welcome, {session.currentUser.email}! </p>
        <button onClick={logout} className ="btn btn-default navbar-btn ">Log out</button>
      </section>
    );

};

export default Greeting;
