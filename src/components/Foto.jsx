import React from "react";
import foto from "../img/FotoSocial.png";
import "./style/foto.css";

export default (props) => (
    <div className="caixaFoto">
        <img src={foto} alt="Foto do Lukas" />
    </div>
);