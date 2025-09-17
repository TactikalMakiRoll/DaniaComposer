import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="logo">
      <div>
        <p className="logo-main">DANYA</p>
        <hr style={{ margin: "2px 0", borderColor: "#ccc" }} />
        <p className="logo-sub">COMPOSER</p>
      </div>
    </Link>
  );
};

export default Logo;
