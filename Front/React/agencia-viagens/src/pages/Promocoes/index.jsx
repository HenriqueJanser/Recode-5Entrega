import React from "react";

import "../../index.css";

import Image1 from "../../assets/img/viagens.png";
import Image2 from "../../assets/img/salvador1.png";
import Image3 from "../../assets/img/fortaleza-img2.jpg";
import Image4 from "../../assets/img/riodejaneiro-img3.jpg";
import Image5 from "../../assets/img/recife-img4.jpg";

export default function promocoes() {
    return (

        <main className="container-fluid">

            <img src={Image1} alt="" className="container-fluid imagem-style" />

            <div className="container margin-card">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-title main">
                            <h4>APROVEITE OFERTAS DE PACOTES DE VIAGEM PARA CONHECER O BRASIL</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={Image2} alt="Card image cap" />
                            <div className="card-body">
                                <h4>Salvador</h4>
                                <h5>R$ 750,00</h5>
                                <p className="card-text">Voo + Hotel em até 12x.</p>
                                <a className="btn btn-primary" href="destino.html">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={Image3} alt="Card image cap" />
                            <div className="card-body">
                                <h4>Fortaleza</h4>
                                <h5>R$ 790,00</h5>
                                <p className="card-text">Voo + Hotel em até 12x.</p>
                                <a className="btn btn-primary" href="destino.html">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={Image4} alt="Card image cap" />
                            <div className="card-body">
                                <h4>Rio de Janeiro</h4>
                                <h5>R$ 780,00</h5>
                                <p className="card-text">Voo + Hotel em até 12x.</p>
                                <a className="btn btn-primary" href="destino.html">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={Image5} alt="Card image cap" />
                            <div className="card-body">
                                <h4>Recife</h4>
                                <h5>R$ 730,00</h5>
                                <p className="card-text">Voo + Hotel em até 12x.</p>
                                <a className="btn btn-primary" href="destino.html">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>

                <div className="text-center">
                    <p>Desenvolvido por Henrique Janser - Todos os direitos reservados.</p>
                </div>

            </footer>

        </main>

    );
}