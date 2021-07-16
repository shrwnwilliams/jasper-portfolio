import React from 'react';
import "./style.css"

function Header() {
    return(
        <header className="head">
            <nav className="nav">
                <a href="#">Home</a>
                <a href="#">Short Films</a>
                <a href="#">Script Writing</a>
                <a href="#">Sound Design</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}

export default Header;