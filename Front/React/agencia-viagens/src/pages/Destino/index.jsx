import React from "react";

import "../../index.css";

import Image1 from "../../assets/img/elevador-lacerda.png";
import Image2 from "../../assets/img/riodejaneiro1.png";
import Image3 from "../../assets/img/fortalezaimg.png";
import Image4 from "../../assets/img/salvador1.png";
import Image5 from "../../assets/img/fortaleza-img2.jpg";
import Image6 from "../../assets/img/riodejaneiro-img3.jpg";
import Image7 from "../../assets/img/recife-img4.jpg";



export default function Destino() {
    return (

        <main className="container-fluid">

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={Image1} alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Salvador</h5>
                            <p>A capital do estado da Bahia no nordeste do Brasil, é conhecida pela arquitetura colonial
                                portuguesa, pela cultura afrobrasileira e pelo litoral tropical.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Image2} alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Rio de Janeiro</h5>
                            <p>O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de
                                Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor, no topo do
                                Corcovado, e pelo Pão de Açúcar, um pico de granito com teleféricos até seu cume.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Image3} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Fortaleza</h5>
                            <p>A cidade de Fortaleza é a capital do Ceará. O território fortalezense é banhado pelas águas
                                do Oceano Atlântico e possui um clima tropical, marcado pelas altas temperaturas.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>


            <div className="container margin-card">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-title main">
                            <h4>CONHEÇA AS PRAIAS DO BRASIL</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={Image4} alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="text-center">Salvador</h4>
                                <a className="btn btn-primary btn-block" href="promocoes.html">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={Image5} alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="text-center">Fortaleza</h4>
                                <a className="btn btn-primary btn-block" href="promocoes.html">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={Image6} alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="text-center">Rio de Janeiro</h4>
                                <a className="btn btn-primary btn-block" href="promocoes.html">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={Image7} alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="text-center">Recife</h4>
                                <a className="btn btn-primary btn-block" href="promocoes.html">Comprar</a>
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