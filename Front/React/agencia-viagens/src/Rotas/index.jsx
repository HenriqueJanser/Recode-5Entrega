import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Contato from "../pages/Contato";
import Destino from "../pages/Destino";
import Home from "../pages/Home";
import Promocoes from "../pages/Promocoes";

import Image1 from "../assets/img/favicon.png";



export default function Rotas() {
    return (

        <BrowserRouter>

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
                        <a className="nav-item nav-link active" ><Link to="/"> Home</Link></a>
                        <a className="nav-item nav-link active" ><Link to="/Destino"> Destino</Link></a>
                        <a className="nav-item nav-link active" ><Link to="/Promocoes"> Promoções</Link></a>
                        <a className="nav-item nav-link active" ><Link to="/Contato"> Contato</Link></a>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/Contato" element={<Contato />} />
                <Route path="/Destino" element={<Destino />} />
                <Route path="/" element={<Home />} />
                <Route path="/promocoes" element={<Promocoes />} />
            </Routes>
        </BrowserRouter>

    );
}