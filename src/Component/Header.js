import React from "react";
import Logo from "../assets/cook.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="Cooker Logo" />
            <Link to="/">
                {" "}
                <h1>React Cooking</h1>
            </Link>
            <p>A simply recipies searching tools</p>
        </div>
    );
}

export default Header;
