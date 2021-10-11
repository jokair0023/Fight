import React from 'react';
import './Navbar.css';
import MenuSVG from '../../Assets/menu.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [NavbarResponsive, setNavbarResponsive] = useState(false);

    const ReponsiveMenu = () => {
        setNavbarResponsive(!NavbarResponsive);
    }

    return (
        <div>
            <header>
                <div className="Barre-Menu">
                    <h1>
                        <Link to="/" className="ReturnHome">FightStreaming</Link>
                    </h1>
                    <img src={MenuSVG} onClick={ReponsiveMenu}/>
                </div>
                {NavbarResponsive && <nav>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/Boxing">Boxing</Link>
                        </li>
                        <li>
                            <Link to="/UFC-Fights">UFC Fights</Link>
                        </li>
                        <li>
                            <Link to="/BellatorMMA">Bellator MMA</Link>
                        </li>
                        <li>
                            <a href="https://t.me/fightstreaming" target="_blank">Telegram</a>
                        </li>
                    </ul>
                </nav>
                }
            </header>
        </div>
    )
}
