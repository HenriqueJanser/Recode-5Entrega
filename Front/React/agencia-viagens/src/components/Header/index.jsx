import React from "react";

import "../../index.css";

import Image1 from "../../assets/img/favicon.png";

export default function Header() {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
                <a className="navbar-brand" href="#">
                    <h2><a><img src={Image1} width="43px" /></a></h2>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse links" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="index.html">Home</a>
                        <a className="nav-item nav-link active" href="destino.html">Destino</a>
                        <a className="nav-item nav-link active" href="../../Pages/Promocoes/index.jsx">Promoções </a>
                        <a className="nav-item nav-link active" href="contato.html">Contato</a>
                    </div>
                </div>
            </nav>
        </div>

    );
}