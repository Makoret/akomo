import React from 'react';
import '../css/Menu.css';

export default function Menu() {
    return (
        <div className="intro">
            <div className="title">
                <h1>akomo</h1>
            </div>
            <div className="menu">
                <div className="menu_startGame">start game</div>
                <div className="menu_loadGame">load game</div>
                <div className="menu_options">options</div>
                <div className="menu_credits">credits</div>
                <span className='version'>i.0.0</span>
            </div>
        </div>
    )
}
