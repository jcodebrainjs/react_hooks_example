import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => (
  <div className="content">
    <h2>Wrong way.</h2>
    <Link className="nav__link" to="/">
      Go Home
    </Link>
  </div>
);

export default Page404;
