import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <div>
        <h2>Sorry, this page does not exist</h2>
        <Link to="/">
          <p>Back to Homepage</p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
