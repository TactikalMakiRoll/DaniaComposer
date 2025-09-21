import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="logo">
      <div>
        <p className="logo-main">Danylo Dunets</p>
        <p className="logo-sub">I-Human</p>
      </div>
    </Link>
  );
};

export default Logo;
