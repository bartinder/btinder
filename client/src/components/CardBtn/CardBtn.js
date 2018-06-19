import React from "react";
import "./CardBtn.css";

const CardBtn = props => (
    <nav class="nav justify-content-around">
        <button role="presentation" className="active nav-item"><span className="fas fa-beer fa-3X"></span></button>
        <button role="presentation" className="nav-item"><span className="fas fa-users"></span></button>
        <button role="presentation" className="nav-item"><span className="fas fa-cog"></span></button>
    </nav>
);

export default CardBtn;
